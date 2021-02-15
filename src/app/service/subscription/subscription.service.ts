import {Injectable} from '@angular/core';
import {SubscriptionData} from "../../subscription-form/model/subscription-data";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    private subscriptionUrl = "http://localhost:8080/api/subscription";

    constructor(private httpClient: HttpClient) {
    }

    subscribe(data: SubscriptionData): void {
        console.log(`SubscriptionService: subscribe ${data.name} with ${data.email}`);

        const headers = new HttpHeaders().set('Content-type', 'application/json');
        const body = {
            email: data.email,
            name: data.name
        };
        this.httpClient.post(this.subscriptionUrl, body, {headers, observe: "response"}).subscribe(response => {
            console.log("Response: " + JSON.stringify(response));
        })
    }
}
