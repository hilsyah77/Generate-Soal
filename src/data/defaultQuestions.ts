import { Question } from '../types';
import { QUESTIONS_BK } from './questionsBK';
import { QUESTIONS_TIK } from './questionsTIK';
import { QUESTIONS_SK } from './questionsSK';
import { QUESTIONS_JKI } from './questionsJKI';
import { QUESTIONS_AD } from './questionsAD';
import { QUESTIONS_AP } from './questionsAP';
import { QUESTIONS_DSI } from './questionsDSI';
import { QUESTIONS_PLB } from './questionsPLB';

export const DEFAULT_QUESTIONS: Question[] = [
  ...QUESTIONS_BK,
  ...QUESTIONS_TIK,
  ...QUESTIONS_SK,
  ...QUESTIONS_JKI,
  ...QUESTIONS_AD,
  ...QUESTIONS_AP,
  ...QUESTIONS_DSI,
  ...QUESTIONS_PLB,
];
