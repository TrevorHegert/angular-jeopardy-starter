import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() questionInfo;
  @Input() score;
  userAnswer

  @Output() answered = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  grade(){
    this.answered.emit(this.userAnswer);
  }

}
