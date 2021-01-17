import {Answer} from './answer';

export interface Question {
  id: number,
  question: string,
  answers: Array<Answer>,
  tip: string
}
