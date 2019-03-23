import{Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event.model'

@Injectable ({
    providedIn: 'root'
})
export class EventsServices {

    private readonly url = 'https://angular.gobuild.guru/ng-workshop';
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
    getEvents() : Observable<Event[]> {
        return this.http.get<Event[]>(`${this.url}/events`)
    }
}

