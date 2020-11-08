import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Quiz} from './quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  private quizUrl = "http://localhost:8080/api/v1/quiz/a";

  private quizForm;
  private title = 'Grammati';
  private tipVisible = false;
  private currentQuestion;
  private answeredQuestions = new Array<any>();
  private quiz: Quiz;
  private showAnswer = false;

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
      .get<any>("/assets/quiz.json")
      .subscribe(data => {
        this.quiz = data;
        this.showNextQuestion();
      })
  }

  showTip() {
    this.tipVisible = true;
  }

  handleSubmitButtonClick(answerData: any) {
    if (this.showAnswer) {
      console.info('next questino');
      this.showAnswer = false;
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

  private showNextQuestion() {
    this.currentQuestion = this.quiz.questions.pop();
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
}
