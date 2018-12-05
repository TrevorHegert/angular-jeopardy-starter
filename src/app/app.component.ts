import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = "Trevor's Angular Jeopardy Game";

  questionInfo;
  userScore= 0;
  lastAnswerWas= '';
  

  constructor(private DataService: DataService){}

  onClicked(userAnswer: string) {
    this.checkAnswer(userAnswer);
  }

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
                  }
      )
  }

  checkAnswer(potato){
    if (potato.replace(/i/g, "").replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase() === this.questionInfo.answer.replace(/i/g, "").replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase()) {
      console.log("clicked");
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
    this.lastAnswerWas = 'CORRECT!';
    this.userScore = (this.userScore + this.questionInfo.value);
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
                  }
      )
  }



  ngOnInit(){
    this.getQuestionInfo()
  }


}
