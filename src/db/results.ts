import { db } from './index.ts';
import { examResultsTable } from './schema.ts';
import { desc } from 'drizzle-orm';

export interface ExamResultInput {
  userId?: number;
  studentName: string;
  studentClass: string;
  packageKey: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  answersData: string;
}

export async function saveExamResult(data: ExamResultInput) {
  try {
    const result = await db.insert(examResultsTable).values({
      userId: data.userId || null,
      studentName: data.studentName,
      studentClass: data.studentClass,
      packageKey: data.packageKey,
      score: data.score,
      correctCount: data.correctCount,
      totalQuestions: data.totalQuestions,
      answersData: data.answersData,
    }).returning();
    return result[0];
  } catch (error) {
    console.error('Database saveExamResult failed:', error);
    throw new Error('Failed to save exam result.', { cause: error });
  }
}

export async function getExamResults() {
  try {
    return await db.select().from(examResultsTable).orderBy(desc(examResultsTable.createdAt));
  } catch (error) {
    console.error('Database getExamResults failed:', error);
    throw new Error('Failed to fetch exam results.', { cause: error });
  }
}
