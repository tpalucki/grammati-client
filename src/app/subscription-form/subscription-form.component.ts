import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../service/config/config.service";
import {SubscriptionService} from "../service/subscription/subscription.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription-form.component.html',
    styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

    submitted: boolean;
    title: string;
    subscriptionFormGroup = new FormGroup({
        emailFormControl: new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
    });

    constructor(private configService: ConfigService,
                private subscriptionService: SubscriptionService) {
        this.title = configService.title;
    }

    ngOnInit() {

    }

    onSubmit() {
        console.info('Submitted');
        this.submitted = true;
        this.subscriptionService.subscribe(
            this.subscriptionFormGroup.get('emailFormControl').value
        );
    }
}
