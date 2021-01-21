import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private _title = 'Gramilka';

    constructor() {
    }

    get title(): string {
        return this._title;
    }

    get footer(): string {
        return '© ' + new Date().getFullYear() + ' ' + this.title;
    }
}
