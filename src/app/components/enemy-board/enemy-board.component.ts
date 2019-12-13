import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-enemy-board',
  templateUrl: './enemy-board.component.html',
  styleUrls: ['./enemy-board.component.css']
})
export class EnemyBoardComponent implements OnInit {

  squares: any[];
  index: any;
  winner: string;

  //Pirata 1
  player1: any = {
    arrOfIdx: [],
    treasuresAt: []
  }

  //Pirata 2
  player2: any = {
    arrOfIdx: [],
    treasuresAt: [],
    score: 0
  }

  currentTurn: string = 'p1';

  //Estado de Tesoros Guardados por jugador
  hidding: any = {
    player1: false,
    player2: false
  };

  //Turnos de Jugada
  turn: any = {
    player1: "p1",
    player2: "p2"
  };

  constructor(public boardsService:BoardsService) { }

  ngOnInit() {
    this.newGame();
    console.log("hola")
    this.player1.treasuresAt = this.boardsService.sendTreasure()
    console.log("oiiiiiiii", this.player1.treasuresAt)  
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.index = true;
  };

  // play(value: boolean) {
  //   console.log(value)
  //   if (value) {
  //     return this.index = true;
  //   } else {
  //     return this.index = false;
  //   }
  // };
  

   //Identifica ataque - tesoro || calavera
   makeMove(idx: number) {
    console.log(idx,this.player1.treasuresAt)
    console.log(idx, !this.squares[idx], this.squares, this.index)
    this.player1.treasuresAt.forEach(a => {
      if (!this.squares[idx]) {
        if (idx === a) {
          this.index = true;
          this.player2.score = this.player2.score+1;
          this.boardsService.score2(this.player2.score)
          this.squares.splice(idx, 1, this.index);
          console.log("tesoro", this.squares, this.player2.score)
        }
        else {
          console.log('calavera')
          this.index = false;
          this.squares.splice(idx, 1, this.index);
        }
      }
    })
  };

};
