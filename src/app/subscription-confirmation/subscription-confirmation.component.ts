import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-subscription-confirmation',
    templateUrl: './subscription-confirmation.component.html',
    styleUrls: ['./subscription-confirmation.component.scss']
})
export class SubscriptionConfirmationComponent implements OnInit {

    messageHeader: string;
    message: {
        text: string,
        success: boolean;
    };
    private subscriptionId: string;
    private subscriptionConfirmationUrl = 'http://localhost:8080/api/subscription/';

    constructor(private httpClient: HttpClient,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.paramMap.subscribe(params => {
            this.subscriptionId = params.get('subscriptionId');
            console.log('Subscription id: ' + this.subscriptionId);
        });
    }

    ngOnInit() {
        if (this.subscriptionId != null) {
            this.messageHeader = 'Confirming subscription...';
            const headers = {};
            this.httpClient
                .get(this.subscriptionConfirmationUrl + this.subscriptionId, {headers, observe: "response"})
                .subscribe(response => {
                        this.message = {
                            text: 'Subscription confirmed. Thank you!',
                            success: true
                        }
                    }, error => {
                        this.message = {
                            text: 'Something went wrong... sorry! Please try again later.',
                            success: false
                        }
                    }
                );
        } else {
            this.messageHeader = 'Please check you email to confirm subscription.';
        }
    }

    alertType(): string {
        return this.message.success ? 'alert-success' : 'alert-danger';
    }

}
