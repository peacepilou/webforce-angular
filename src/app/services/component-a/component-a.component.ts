import { Component, OnInit } from '@angular/core';
import { TransformDateService } from 'src/app/shared/transform-date.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  date: Date = new Date();
  dateString: string = '';
  dateNumber: number = 0;

  constructor(private tds: TransformDateService) { }

  ngOnInit(): void {
   this.dateString = this.tds.dateToString(this.date);
   this.dateNumber = this.tds.dateToTimestamp(this.date);
  }

}
