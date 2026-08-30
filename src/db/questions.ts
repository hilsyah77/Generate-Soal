import { db } from './index.ts';
import { questionBankTable } from './schema.ts';
import { eq, desc } from 'drizzle-orm';
import { Question } from '../types.ts';

export async function getAllQuestions(): Promise<Question[]> {
  try {
    const rows = await db.select().from(questionBankTable).orderBy(desc(questionBankTable.createdAt));
    return rows.map((r) => {
      const options: [string, string, string, string] = [
        r.pilihanA,
        r.pilihanB,
        r.pilihanC,
        r.pilihanD,
      ];
      const letterToIndex: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };
      const correctIndex = typeof letterToIndex[r.kunci] === 'number' ? letterToIndex[r.kunci] : 0;

      return {
        id: r.id,
        materi: r.materi,
        topic: r.topik,
        stem: r.soal,
        options,
        correctIndex,
        level: r.level as any,
        explanation: r.pembahasan,
      };
    });
  } catch (error) {
    console.error('Database query failed for getAllQuestions:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function saveQuestion(q: Question, userId?: number) {
  try {
    const indexToLetter = ['A', 'B', 'C', 'D'];
    const kunciLetter = indexToLetter[q.correctIndex] || 'A';
    const opt = q.options || ['', '', '', ''];

    await db
      .insert(questionBankTable)
      .values({
        id: q.id,
        userId: userId || null,
        materi: q.materi || 'Informatika',
        topik: q.topic || '',
        soal: q.stem || '',
        pilihanA: opt[0] || '',
        pilihanB: opt[1] || '',
        pilihanC: opt[2] || '',
        pilihanD: opt[3] || '',
        kunci: kunciLetter,
        level: q.level || 'MotS',
        pembahasan: q.explanation || '',
      })
      .onConflictDoUpdate({
        target: questionBankTable.id,
        set: {
          materi: q.materi || 'Informatika',
          topik: q.topic || '',
          soal: q.stem || '',
          pilihanA: opt[0] || '',
          pilihanB: opt[1] || '',
          pilihanC: opt[2] || '',
          pilihanD: opt[3] || '',
          kunci: kunciLetter,
          level: q.level || 'MotS',
          pembahasan: q.explanation || '',
        },
      });
  } catch (error) {
    console.error('Database saveQuestion failed:', error);
    throw new Error('Failed to save question.', { cause: error });
  }
}

export async function deleteQuestionById(id: string) {
  try {
    await db.delete(questionBankTable).where(eq(questionBankTable.id, id));
  } catch (error) {
    console.error('Database deleteQuestionById failed:', error);
    throw new Error('Failed to delete question.', { cause: error });
  }
}

