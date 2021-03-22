import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() dataEmitFromChild: EventEmitter<any> = new EventEmitter<any>();

  @Input() childData: number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(): void {
    this.dataEmitFromChild.emit('Ceci est une phrase envoyée au composant parent !');
  }
}
