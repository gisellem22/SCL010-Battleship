import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-enemy-board',
  templateUrl: './enemy-board.component.html',
  styleUrls: ['./enemy-board.component.css']
})
export class EnemyBoardComponent implements OnInit {

  squares: any[];
  index: boolean;
  winner: string;
  arrOfIdx: number[] = [];
  hidddingAt: number[];
  
  constructor(public boardsService: BoardsService) { }

  ngOnInit() {
    let result = this.boardsService.hola();
    console.log(result)
    let newGame = this.boardsService.newGame();
    this.squares = newGame.squares;
    this.winner = newGame.winner;
    this.index = newGame.index;
    this.arrOfIdx = newGame.arrOfIdx;
    console.log(newGame)

    this.boardsService.newGameObservable.subscribe(game => {
      this.squares = game.squares;
    this.winner = game.winner;
    this.index = game.index;
    this.arrOfIdx = game.arrOfIdx;
    this.hidddingAt = game.hidddingAt;
    console.log(game) 
    });
  }

  playGame (idx:number) {
    this.boardsService.playGame(idx)
  };

  startGame() {
    let newGame = this.boardsService.startGame();
    this.squares = newGame.squares;
    this.winner = newGame.winner;
    this.index = newGame.index;
    this.arrOfIdx = newGame.arrOfIdx;
    console.log(newGame)
  };
  
}
