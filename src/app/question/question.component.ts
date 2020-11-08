import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  private quizUrl = "http://localhost:8080/quiz/a";
  private httpOptions = {
    observe: 'response',
    responseType: 'json'
  };

  private quiz: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // const headers = {'Access-Control-Allow-Origin': 'http://localhost:4200/'};
    const headers = {};
    this.httpClient
      .get<any>(this.quizUrl, {headers, observe: 'body', responseType: 'json'})
      .subscribe(data => {
        this.quiz = data;
      })
  }

}
