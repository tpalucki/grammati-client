import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionComponent} from './question/question.component';
import {HttpClientModule} from '@angular/common/http';
import {OriginalComponent} from './original/original.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubscriptionFormComponent} from "./subscription-form/subscription-form.component";
import {NavbarComponent} from './component/navbar/navbar.component';
import {ProgressBarComponent} from './component/progress-bar/progress-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestionComponent,
        OriginalComponent,
        SubscriptionFormComponent,
        NavbarComponent,
        ProgressBarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
