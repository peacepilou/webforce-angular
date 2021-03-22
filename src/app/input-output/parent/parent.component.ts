import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentData: number = 42
  dataFromChild: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  
  dataReceiveFromChild(event: any): void {
    console.log(event);
    this.dataFromChild = event;
  }

}
