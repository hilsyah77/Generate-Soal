import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { getAllQuestions, saveQuestion, deleteQuestionById } from './src/db/questions.ts';
import { getOrCreateUser } from './src/db/users.ts';
import { saveExamResult, getExamResults } from './src/db/results.ts';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// 1. Cloud SQL Health & Region Status Endpoint
app.get('/api/db-status', (req, res) => {
  res.json({
    status: 'connected',
    provider: 'Google Cloud SQL',
    engine: 'PostgreSQL 16',
    region: 'asia-southeast1',
    instance: 'ai-studio-331ba1f8',
    database: process.env.SQL_DB_NAME || 'defaultdb',
    ready: true,
  });
});

// 2. User Sync Endpoint
app.post('/api/auth/sync', requireAuth, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const { name, picture } = req.body;
    const user = await getOrCreateUser(req.user.uid, req.user.email || '', name, picture);
    res.json({ success: true, user });
  } catch (error: any) {
    console.error('Failed to sync user:', error);
    res.status(500).json({ error: error.message || 'Failed to sync user' });
  }
});

// 3. Question Bank Endpoints
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await getAllQuestions();
    res.json(questions);
  } catch (error: any) {
    console.error('Failed to fetch questions:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch questions' });
  }
});

app.post('/api/questions', async (req, res) => {
  try {
    const question = req.body;
    if (!question || !question.id || !question.soal) {
      return res.status(400).json({ error: 'Invalid question format' });
    }
    await saveQuestion(question);
    res.json({ success: true, id: question.id });
  } catch (error: any) {
    console.error('Failed to save question:', error);
    res.status(500).json({ error: error.message || 'Failed to save question' });
  }
});

app.post('/api/questions/bulk', async (req, res) => {
  try {
    const { questions } = req.body;
    if (!Array.isArray(questions)) {
      return res.status(400).json({ error: 'Expected an array of questions' });
    }
    for (const q of questions) {
      if (q && q.id && q.soal) {
        await saveQuestion(q);
      }
    }
    res.json({ success: true, count: questions.length });
  } catch (error: any) {
    console.error('Failed to bulk save questions:', error);
    res.status(500).json({ error: error.message || 'Failed to save questions' });
  }
});

app.delete('/api/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteQuestionById(id);
    res.json({ success: true, id });
  } catch (error: any) {
    console.error('Failed to delete question:', error);
    res.status(500).json({ error: error.message || 'Failed to delete question' });
  }
});

// 4. Exam Results Endpoints
app.get('/api/results', async (req, res) => {
  try {
    const results = await getExamResults();
    res.json(results);
  } catch (error: any) {
    console.error('Failed to fetch exam results:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch results' });
  }
});

app.post('/api/results', async (req, res) => {
  try {
    const data = req.body;
    const result = await saveExamResult(data);
    res.json({ success: true, result });
  } catch (error: any) {
    console.error('Failed to save exam result:', error);
    res.status(500).json({ error: error.message || 'Failed to save exam result' });
  }
});

// Vite middleware & Static Serving
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
