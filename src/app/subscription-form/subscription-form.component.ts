import {Component, OnInit} from '@angular/core';
import {Subscription} from "./subscription";

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription-form.component.html',
    styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

    submitted: boolean;
    model = new Subscription(null);

    constructor() {
    }

    ngOnInit() {

    }

    onSubmit() {
        console.info('Submitted');
        this.submitted = true;
    }
}
