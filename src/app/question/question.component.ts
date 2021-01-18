import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Quiz} from './model/quiz';
import {Question} from "./model/question";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    quizForm;
    tipVisible = false;
    currentQuestion: Question;
    answeredQuestions = new Array<any>();
    quiz: Quiz;
    showAnswer = false;
    inProgress = true;
    private quizUrl = "http://localhost:8080/api/v1/quiz/a";

    constructor(private httpClient: HttpClient,
                private formBuilder: FormBuilder) {
        this.quizForm = this.formBuilder.group({
            answerControl: [Validators.required]
        });
    }

    ngOnInit() {
        const headers = {};
        this.httpClient
        // .get<any>(this.quizUrl, {headers, observe: 'body', responseType: 'json'})
        //     .get<any>("/assets/quiz.json")
            .get<any>("/assets/quiz-simple.json")
            .subscribe(data => {
                this.quiz = data;
                this.showNextQuestion();
            })
    }

    showTip() {
        this.tipVisible = true;
    }

    hideTip() {
        this.tipVisible = false;
    }

    handleSubmitButtonClick(answerData: any) {
        if (this.showAnswer) {
            console.info('next question');
            this.showAnswer = false;
            this.hideTip();
            this.showNextQuestion();
        } else {
            console.info('show answer');
            this.showAnswer = true;
            this.answeredQuestions.push(this.currentQuestion);
        }
    }

    nextQuestion() {
        this.quizForm.reset();
        this.tipVisible = false;

        if (this.quiz.questions.length) {
            this.showNextQuestion();
        }

    }

    isAnswerCorrect(): boolean {
        return true;
    }

    alertType(): string {
        return this.isAnswerCorrect() ? 'alert-success' : 'alert-danger';
    }

    alertMessage(): string {
        return this.isAnswerCorrect() ? 'Well done!' : 'Wrong';
    }

    submitButtonText() {
        return this.showAnswer ? 'Next question' : 'Check';
    }

    private showNextQuestion() {
        if (this.quiz.questions.length === 0) {
            this.inProgress = false;
        } else {
            this.currentQuestion = this.quiz.questions.pop();
        }
    }
}
