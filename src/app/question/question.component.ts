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

  quizForm;
  title = 'Grammati';
  tipVisible = false;

  currentQuestion;

  answeredQuestions = new Array<any>();

  quiz: Quiz;

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
        this.currentQuestion = this.quiz.questions.pop();
      })
  }

  showTip() {
    this.tipVisible = true;
  }

  submitAnswer(answerData: any) {
    this.quizForm.reset();
    console.warn('Your question has not been yet submitted', answerData);
    this.answeredQuestions.push(this.currentQuestion);
    this.tipVisible = false;
    if (this.quiz.questions.length > 0) {
      this.currentQuestion = this.quiz.questions.pop();
    } else {
      console.info("Answers: " + this.answeredQuestions);
    }
  }

}
