import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private _title = 'Grammati';

    constructor() {
    }

    get title(): string {
        return this._title;
    }
}
