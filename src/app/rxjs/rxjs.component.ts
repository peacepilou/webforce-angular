import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  datas: number[] = [];
  datasPerSecond: number = 0;
  datasPerSecondTo5: number = 0;
  datasTransformed: number = 0;

  constructor(private dbs: DatabaseService) { }

  ngOnInit(): void {

    this.dbs.getDatas().subscribe(dataFromServeur => {
      this.datas = dataFromServeur;
    });

    this.dbs.getDatasInterval().subscribe(dataFromServeur => {
      this.datasPerSecond = dataFromServeur;
    });

    this.dbs.getDatasIntervalLimitedTo5().subscribe(dataFromServeur => {
      this.datasPerSecondTo5 = dataFromServeur;
    });

    this.dbs.getDatasTransformed().subscribe(dataFromServeurAndTransformed => {
      this.datasTransformed = dataFromServeurAndTransformed;
    })
   
  }

}
