import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class InstructionService {
    data: any;

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(public http: Http) {}

    getInstructions () : Observable <any> {
        return this.http.get('/api/instructions')
        .map((response: Response) => {
            return <any>response.json();
        })
    }

}