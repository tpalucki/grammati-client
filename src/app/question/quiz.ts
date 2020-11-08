import {Question} from './question';

export interface Quiz {
  id: number,
  sessionId: string,
  questions: Array<Question>
}
