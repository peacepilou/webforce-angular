import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformDateService {

  constructor() { }

  dateToString(date: Date): string {
    return date.toLocaleDateString();
  }

  dateToTimestamp(date: Date): number {
    return date.getTime();
  }
}


