import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = "Trevor's Angular Jeopardy Game"

  questionInfo;
  userAnswer: string = "";
  userScore: number = 0;
  lastAnswerWas: string = '';
  cheating: boolean = false;
  

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
                  }
      )
  }

  checkAnswer(){
    if (this.userAnswer.toLowerCase === this.questionInfo.answer.toLowerCase) {
      this.givePoints();
    } else {
      this.takePoints();
    }
  }

  takePoints(){
    this.lastAnswerWas = 'INCORRECT!';
    this.userScore = (this.userScore - this.questionInfo.value);
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
                  }
      )
  }

  givePoints(){
    this.lastAnswerWas = 'CORRECT!;'
    this.userScore = (this.userScore + this.questionInfo.value);
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
                  }
      )
  }

  cheat() {
    this.cheating = !this.cheating;
  }

  ngOnInit(){
    this.getQuestionInfo()
  }


}
