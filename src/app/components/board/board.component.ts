import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  index: boolean;
  winner: string;
  arrOfIdx: number[];
  hidddingAt: number[];
  
  // hidding: any = {
  //   player1: false
  // };

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

  // newGame() {
  //   this.squares = Array(9).fill(null);
  //   this.winner = null;
  //   this.index = true;
  //   this.arrOfIdx = [];
  // };

  // play(value: boolean) {
  //   console.log(value)
  //   if (value) {
  //     return this.index = true;
  //   } else {
  //     return this.index = false;
  //   }
  // };

  // playGame(idx:number) {
  //   console.log(this.hidding.player1);
  //   if (this.hidding.player1 ===false){
  //     this.hideTreasures(idx)
  //   } else {
  //     this.makeMove(idx)
  //   }
  // };
  
  // hideTreasures(idx: number) {
  //   //si no existe nada en el arreglo, guarda el primer indice
  //   if (this.arrOfIdx.length < 1) {
  //     this.arrOfIdx.push(idx)
  //     this.index = true;
  //     this.squares.splice(idx, 1, this.index);
  //     console.log(this.arrOfIdx)
  //     //si el arreglo tiene de 1 a 3 indices
  //   } else if (this.arrOfIdx.length > 0 && this.arrOfIdx.length < 3) {
  //     // impide pushear el mismo indice
  //     if (this.arrOfIdx.includes(idx)) {
  //       console.log("try again")
  //       //si el indice no está contenido en el arreglo, pushealo
  //     } else {
  //       this.arrOfIdx.push(idx)
  //       this.index = true;
  //       this.squares.splice(idx, 1, this.index);
  //       console.log(this.arrOfIdx)
  //     }
  //   } else {
  //     console.log("hasta aqui nomás")
  //   }
  //   console.log(this.arrOfIdx)
  // };

  // startGame() {
  //   if (this.arrOfIdx.length === 3) {
  //     console.log("hey")
  //     this.hidding.player1 = true;
  //     this.hidddingAt = Array.from(this.arrOfIdx);
  //     console.log("111",this.hidding,"original",this.arrOfIdx, "clone",this.hidddingAt)
  //     this.newGame();
  //   } 
  // };


  // makeMove(idx: number) {
  //   console.log(idx)
  //   console.log(idx, !this.squares[idx], this.squares, this.index)
  //   this.hidddingAt.forEach(a => {
  //     if (!this.squares[idx]) {
  //       if (idx === a) {
  //         this.index = true;
  //         this.squares.splice(idx, 1, this.index);
  //         console.log("oii", this.squares)
  //       }
  //       else {
  //         console.log('xau')
  //         this.index = false;
  //         this.squares.splice(idx, 1, this.index);
  //       }
  //     }
  //   })
  // };

}
