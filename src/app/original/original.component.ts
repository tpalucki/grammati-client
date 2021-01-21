import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../service/config/config.service";

@Component({
    selector: 'app-original',
    templateUrl: './original.component.html',
    styleUrls: ['./original.component.scss']
})
export class OriginalComponent implements OnInit {

    title: string;

    constructor(private configService: ConfigService) {
        this.title = configService.title;
    }

    ngOnInit() {
    }

}
