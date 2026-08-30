import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  displayName: text('display_name'),
  photoUrl: text('photo_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const questionBankTable = pgTable('question_bank', {
  id: text('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  materi: text('materi').notNull(),
  topik: text('topik').notNull(),
  soal: text('soal').notNull(),
  pilihanA: text('pilihan_a').notNull(),
  pilihanB: text('pilihan_b').notNull(),
  pilihanC: text('pilihan_c').notNull(),
  pilihanD: text('pilihan_d').notNull(),
  kunci: text('kunci').notNull(),
  level: text('level').notNull(),
  pembahasan: text('pembahasan').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const examResultsTable = pgTable('exam_results', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  studentName: text('student_name').notNull(),
  studentClass: text('student_class').notNull(),
  packageKey: text('package_key').notNull(),
  score: integer('score').notNull(),
  correctCount: integer('correct_count').notNull(),
  totalQuestions: integer('total_questions').notNull(),
  answersData: text('answers_data').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  questions: many(questionBankTable),
  examResults: many(examResultsTable),
}));

export const questionsRelations = relations(questionBankTable, ({ one }) => ({
  author: one(users, {
    fields: [questionBankTable.userId],
    references: [users.id],
  }),
}));

export const examResultsRelations = relations(examResultsTable, ({ one }) => ({
  studentUser: one(users, {
    fields: [examResultsTable.userId],
    references: [users.id],
  }),
}));
