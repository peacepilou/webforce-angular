import { Component, OnInit } from '@angular/core';
import { TransformDateService } from 'src/app/shared/transform-date.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  date: Date = new Date();
  dateString: string = '';
  dateNumber: number = 0;

  constructor(private tds: TransformDateService) { }

  ngOnInit(): void {
    this.dateString = this.tds.dateToString(this.date);
    this.dateNumber = this.tds.dateToTimestamp(this.date);
  }

}
