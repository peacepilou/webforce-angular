import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  baseUrl: string = 'https://game-of-thrones-quotes.herokuapp.com/v1'

  constructor(private http: HttpClient) { }

  getRandomQuotes(numberOfQuotes: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/random/${numberOfQuotes}`)
  }
  getRandomQuotesForACharacter(name: string, numberOfQuotes: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/author/${name}/${numberOfQuotes}`)
  }
}
