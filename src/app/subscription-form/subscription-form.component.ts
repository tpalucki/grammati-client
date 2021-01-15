import {Component, OnInit} from '@angular/core';
import {Subscription} from "./subscription";
import {ConfigService} from "../service/config/config.service";
import {SubscriptionService} from "../service/subscription/subscription.service";

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription-form.component.html',
    styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

    submitted: boolean;
    model = new Subscription(null);
    title: string;

    constructor(private configService: ConfigService,
                private subscriptionService: SubscriptionService) {
        this.title = configService.title;
    }

    ngOnInit() {

    }

    onSubmit() {
        console.info('Submitted');
        this.submitted = true;
        this.subscriptionService.subscribe(this.model.email);
    }
}
