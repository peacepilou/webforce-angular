import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { skipUntil, filter, map, take, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getDatas(): Observable<number[]> {
    const source = [1, 2, 3];
    const source$ = of(source);
    return source$;
  }

  getDatasInterval(): Observable<number> {
    return interval(1000);
  }

  getDatasIntervalLimitedTo5(): Observable<number> {
    return interval(1000).pipe(take(6));
  }

  getDatasTransformed(): Observable<number> {
  const source$ = interval(1000).pipe(
     map(value => value * 10),
     filter(value => value > 50),
     take(10)
   )
   return source$
  }

}
