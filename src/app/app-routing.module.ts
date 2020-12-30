import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {OriginalComponent} from './original/original.component';


const routes: Routes = [
  {path: '', component: OriginalComponent},
  {path: 'quiz/:quizId', component: QuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
