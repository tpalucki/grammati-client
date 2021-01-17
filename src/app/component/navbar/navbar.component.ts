import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../service/config/config.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private configService: ConfigService) {
    }

    get title(): string {
        return this.configService.title;
    }

    ngOnInit() {
    }

}
