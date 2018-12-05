import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() questionInfo; 
  @Input() lastAnswerWas;
  @Input() userScore;
  @Output() clicked = new EventEmitter<string>()

  userAnswer = "";
  cheating = false;
 
  click() {
    this.clicked.emit(this.userAnswer);
  }

  constructor() { }

  ngOnInit() {
  }

  cheat() {
    this.cheating = !this.cheating;
  }
}
