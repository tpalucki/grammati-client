import {Question} from './question';

export interface Quiz {
    quizId: number,
  sessionId: string,
  questions: Array<Question>
}
