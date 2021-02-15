import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {OriginalComponent} from './original/original.component';
import {SubscriptionFormComponent} from "./subscription-form/subscription-form.component";
import {SubscriptionConfirmationComponent} from "./subscription-confirmation/subscription-confirmation.component";


const routes: Routes = [
    {path: '', component: OriginalComponent},
    {path: 'quiz/:quizId', component: QuestionComponent},
    {path: 'subscription', component: SubscriptionFormComponent},
    {path: 'subscription/confirm', component: SubscriptionConfirmationComponent},
    {path: 'subscription/confirm/:subscriptionId', component: SubscriptionConfirmationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
