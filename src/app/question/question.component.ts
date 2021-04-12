import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Quiz} from './model/quiz';
import {Question} from "./model/question";
import {Answer} from "./model/answer";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

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
    private sessionId;
    private quizUrlBase = 'http://' + environment.backend_host + '/api/quiz';
    private quizUrl;
    private answerUrl = 'http://' + environment.backend_host + '/api/answer';

    constructor(private httpClient: HttpClient,
                private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute) {
        this.quizForm = this.formBuilder.group({
            answerControl: [Validators.required]
        });
        this.activatedRoute.paramMap.subscribe(params => {
            this.sessionId = params.get('quizId');
            this.quizUrl = this.quizUrlBase + '/' + this.sessionId;
        })
    }

    ngOnInit() {
        const headers = {};
        this.httpClient
            .get<any>(this.quizUrl, {headers, observe: 'body', responseType: 'json'})
            //     .get<any>("/assets/quiz.json")
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
        console.log("Answer data: " + JSON.stringify(answerData)); // TODO we can retrieve the form data with the passed argument
        if (this.showAnswer) {
            console.info('next question');
            this.showAnswer = false;
            this.quizForm.enable();
            this.hideTip();
            this.showNextQuestion();
        } else {
            console.info('show answer');
            this.showAnswer = true;
            this.quizForm.disable();
            this.answeredQuestions.push(this.currentQuestion);

            const answerText = this.quizForm.get('answerControl').value;
            const answerObject = this.currentQuestion.answers.find(answer => answer.answerText === answerText);
            console.info('Answer object: ' + JSON.stringify(answerObject));
            this.postAnswer(answerObject);
        }
    }

    private postAnswer(answer: Answer) {
        const headers = new HttpHeaders().set('Content-type', 'application/json');
        const body = {
            quizId: this.quiz.quizId,
            sessionId: this.quiz.sessionId,
            question: {
                questionId: this.currentQuestion.questionId,
                questionText: this.currentQuestion.question
            },
            answer: {
                answerId: answer.answerId,
                answerText: answer.answerText,
                correct: answer.correct
            }
        };
        console.log("Posting answer: " + JSON.stringify(body));
        this.httpClient.post(this.answerUrl, body, {headers, observe: 'body'}).subscribe(data => {
            console.log("Response: " + data);
        });
    }

    isAnswerCorrect(): boolean {
        const answerText = this.quizForm.get('answerControl').value;
        const answerObject = this.currentQuestion.answers.find(answer => answer.answerText === answerText);

        return answerObject.correct;
    }

    alertType(): string {
        return this.isAnswerCorrect() ? 'alert-success' : 'alert-danger';
    }

    alertMessage(): string {
        return this.isAnswerCorrect() ? 'Well done!' : 'Next time will be better!';
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
