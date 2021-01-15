import {Injectable} from '@angular/core';
import {SubscriptionData} from "../../subscription-form/model/subscription-data";

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor() {
    }

    subscribe(data: SubscriptionData): void {
        console.log(`SubscriptionService: subscribe ${data.name} with ${data.email}`);
    }
}
