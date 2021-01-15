import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    constructor() {
    }

    subscribe(email: string): void {
        console.log(`SubscriptionService: subscribe ${email}`);
    }
}
