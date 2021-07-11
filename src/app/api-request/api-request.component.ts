import { Component, OnInit } from '@angular/core';
import { RandomQuote } from '../models/random-quote';
import { HttpRequestService } from '../shared/http-request.service';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.scss']
})
export class ApiRequestComponent implements OnInit {

  constructor(private apiService: HttpRequestService) {}

  numberOfQuotes1: number = 0;
  numberOfQuotes2: number = 0;
  randomQuotes: RandomQuote[] = [];
  initialValue: number = 2;
  
  name: string = '';
  randomQuotesForACharacter: RandomQuote[] = [];

  ngOnInit(): void {}

  getRandomQuotes(): void {
   this.apiService.getRandomQuotes(this.numberOfQuotes1).subscribe(quotes => {
    this.randomQuotes = quotes;
   });
  }

  getRandomQuotesForACharacter(): void {
   this.apiService.getRandomQuotesForACharacter(this.name, this.numberOfQuotes2).subscribe(quotes => {
    this.randomQuotesForACharacter = quotes;
   });
  } 

  refresh(): void {
    this.randomQuotes = [];
    this.randomQuotesForACharacter = [];
  }
}
