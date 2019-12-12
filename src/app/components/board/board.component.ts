import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[];
  index: any;
  winner: string;
//Tesoro Jugador 1
  arrOfIdx1: number[] = [];
  treasuresAt1: number[];
//Tesoro Jugador 2
  arrOfIdx2: number[] = [];
  treasuresAt2: number[];

  currentTurn:string = 'p1';
  
  hidding: any = {
    player1: false,
    player2: false
  };

  turn:any = {
    player1: "p1",
    player2: "p2"
  }

  constructor(public boardsService: BoardsService) { }

  ngOnInit() {
    this.newGame();
    this.boardsService.newAttackObservable.subscribe(squares => {
      this.squares = squares;
      console.log("xuuu",this.squares)
    })
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.index = true;
    this.arrOfIdx1 = [];
  };

  // play(value: boolean) {
  //   console.log(value)
  //   if (value) {
  //     return this.index = true;
  //   } else {
  //     return this.index = false;
  //   }
  // };
  playGame(idx:number) {
    console.log(this.hidding.player1);
    if (this.hidding.player1 ===false && this.hidding.player1 ===false){
      this.hideTreasures(idx)
    } else if (this.hidding.player1 ===true && this.hidding.player2 ===false) {
      this.hideTreasures2(idx)
    } else if (this.hidding.player1 ===true && this.hidding.player2 ===true) {
      this.makeMove(idx)
    }
  };
  
  hideTreasures(idx: number) {
    //si no existe nada en el arreglo, guarda el primer indice
    if (this.arrOfIdx1.length < 1) {
      this.arrOfIdx1.push(idx)
      this.index = true;
      this.squares.splice(idx, 1, this.index);
      console.log(this.arrOfIdx1)
      //si el arreglo tiene de 1 a 3 indices
    } else if (this.arrOfIdx1.length > 0 && this.arrOfIdx1.length < 3) {
      // impide pushear el mismo indice
      if (this.arrOfIdx1.includes(idx)) {
        console.log("try again")
        //si el indice no está contenido en el arreglo, pushealo
      } else {
        this.arrOfIdx1.push(idx)
        this.index = true;
        this.squares.splice(idx, 1, this.index);
        console.log(this.arrOfIdx1)
      }
    } else {
      console.log("hasta aqui nomás")
    }
    console.log(this.arrOfIdx1)
  };
  hideTreasures2(idx: number) {
    //si no existe nada en el arreglo, guarda el primer indice
    if (this.arrOfIdx2.length < 1) {
      this.arrOfIdx2.push(idx)
      this.index = true;
      this.squares.splice(idx, 1, this.index);
      console.log(this.arrOfIdx2)
      //si el arreglo tiene de 1 a 3 indices
    } else if (this.arrOfIdx2.length > 0 && this.arrOfIdx2.length < 3) {
      // impide pushear el mismo indice
      if (this.arrOfIdx2.includes(idx)) {
        console.log("try again")
        //si el indice no está contenido en el arreglo, pushealo
      } else {
        this.arrOfIdx2.push(idx)
        this.index = true;
        this.squares.splice(idx, 1, this.index);
        console.log(this.arrOfIdx2)
      }
    } else {
      console.log("hasta aqui nomás")
    }
    console.log(this.arrOfIdx2)
  };
  treasureOff(){
    this.treasuresAt1.forEach(treasure => {
      this.arrOfIdx1.push(treasure)
      this.index = 'oi';
      this.squares.splice(treasure, 1, this.index)
    })
  };

  setTurn() {
    this.currentTurn = (this.currentTurn === 'p1') ? this.turn.player2 : this.turn.player1;
    console.log("turn",this.currentTurn)
  }

  startGame() {
    if (this.hidding.player1 ===false && this.hidding.player2 ===false){
    if (this.arrOfIdx1.length === 3) {
      console.log("hey")
      this.hidding.player1 = true;
      this.treasuresAt1 = Array.from(this.arrOfIdx1);
      console.log("111",this.hidding,"original",this.arrOfIdx1, "clone",this.treasuresAt1)
      this.newGame();
      // this.treasureOff();
      console.log("jugador 1", this.treasuresAt1)
      this.boardsService.printTreasures(this.treasuresAt1)
    }
  } else if (this.hidding.player1 ===true && this.hidding.player2 ===false){
    if (this.arrOfIdx2.length === 3) {
      console.log("hey")
      this.hidding.player2 = true;
      this.treasuresAt2 = Array.from(this.arrOfIdx2);
      console.log("111",this.hidding,"original",this.arrOfIdx2, "clone",this.treasuresAt2)
      this.newGame();
      // this.treasureOff();
      console.log("jugador 2", this.treasuresAt2)
      this.boardsService.printTreasures(this.treasuresAt2)
    }
  }
  };


  makeMove(idx: number) {
    console.log(idx)
    console.log(idx, !this.squares[idx], this.squares, this.index)
    this.treasuresAt1.forEach(a => {
      if (!this.squares[idx]) {
        if (idx === a) {
          this.index = true;
          this.squares.splice(idx, 1, this.index);
          console.log("oii", this.squares)
        }
        else {
          console.log('xau')
          this.index = false;
          this.squares.splice(idx, 1, this.index);
        }
      }
    })
  };

}
