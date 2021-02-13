import {Answer} from './answer';

export interface Question {
    questionId: number,
    question: string,
    answers: Array<Answer>,
    tip: string
}
