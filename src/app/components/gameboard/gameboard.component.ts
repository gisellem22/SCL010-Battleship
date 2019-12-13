import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  player: string = "Pirata 1 : Guarde el tesoro!";
  enemy: string;
  score1: any = 0;
  score2: any = 0;
  winner:string;

  constructor(public boardsService: BoardsService) { }

  ngOnInit() {
    this.boardsService.newPlayerObservable.subscribe(player => {
      this.player = player;
      console.log(this.player)
    })
    this.boardsService.newEnemyObservable.subscribe(enemy => {
      this.enemy = enemy;
      console.log(this.player)
    });
    this.boardsService.scoreObservable.subscribe(score1 => {
      this.score1 = score1;
      console.log(this.score1)
      this.winnerResult()
    });
    this.boardsService.scoreSecObservable.subscribe(score2 => {
      this.score2 = score2;
      console.log(this.score2)
      this.winnerResult()
    });
  }

  winnerResult() {
    if(this.score1 === 3) {
      this.winner = "Pirata 1";
    } else if (this.score2 === 3) {
      this.winner = "Pirata 2"
    }
    console.log(this.winner)
  }
}
