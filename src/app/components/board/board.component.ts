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

  //Pirata 1
  player1: any = {
    arrOfIdx: [],
    treasuresAt: [],
    score: 0
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
  }

  constructor(public boardsService: BoardsService) { }

  ngOnInit() {
    this.newGame();
    this.boardsService.newAttackObservable.subscribe(squares => {
      this.squares = squares;
      console.log("xuuu", this.squares)
    });
  }

  //Resetear el Juego
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.index = true;
    this.player1.arrOfIdx = [];
  };

  //Analisa el estado de Hidding para Iniciar el Ataque(makeMove)
  playGame(idx: number) {
    console.log(this.hidding.player1);
    if (this.hidding.player1 === false && this.hidding.player1 === false) {
      this.hideTreasures(idx)
    } else if (this.hidding.player1 === true && this.hidding.player2 === false) {
      this.hideTreasures2(idx)
    } else if (this.hidding.player1 === true && this.hidding.player2 === true) {
      this.makeMove(idx)
    }
  };

  //Guardar Tesoros Pirata 1
  hideTreasures(idx: number) {
    //si no existe nada en el arreglo, guarda el primer indice
    if (this.player1.arrOfIdx.length < 1) {
      this.player1.arrOfIdx.push(idx)
      this.index = true;
      this.squares.splice(idx, 1, this.index);
      console.log(this.player1.arrOfIdx)
      //si el arreglo tiene de 1 a 3 indices
    } else if (this.player1.arrOfIdx.length > 0 && this.player1.arrOfIdx.length < 3) {
      // impide pushear el mismo indice
      if (this.player1.arrOfIdx.includes(idx)) {
        console.log("try again")
        //si el indice no está contenido en el arreglo, pushealo
      } else {
        this.player1.arrOfIdx.push(idx)
        this.index = true;
        this.squares.splice(idx, 1, this.index);
        console.log(this.player1.arrOfIdx)
      }
    } else {
      console.log("hasta aqui nomás")
    }
    console.log(this.player1.arrOfIdx)
  };

  //Guardar Tesoros Pirata 2
  hideTreasures2(idx: number) {
    //si no existe nada en el arreglo, guarda el primer indice
    if (this.player2.arrOfIdx.length < 1) {
      this.player2.arrOfIdx.push(idx)
      this.index = true;
      this.squares.splice(idx, 1, this.index);
      console.log(this.player2.arrOfIdx)
      //si el arreglo tiene de 1 a 3 indices
    } else if (this.player2.arrOfIdx.length > 0 && this.player2.arrOfIdx.length < 3) {
      // impide pushear el mismo indice
      if (this.player2.arrOfIdx.includes(idx)) {
        console.log("try again")
        //si el indice no está contenido en el arreglo, pushealo
      } else {
        this.player2.arrOfIdx.push(idx)
        this.index = true;
        this.squares.splice(idx, 1, this.index);
        console.log(this.player2.arrOfIdx)
      }
    } else {
      console.log("hasta aqui nomás")
    }
    console.log(this.player2.arrOfIdx)
  };

  //Desabilitar tesoros
  treasureOff() {
    this.player1.arrOfIdx.forEach(treasure => {
      this.player1.arrOfIdx.push(treasure)
      this.index = 'oi';
      this.squares.splice(treasure, 1, this.index)
    })
  };

  //Indica el turno de Jugador
  setTurn() {
    this.currentTurn = (this.currentTurn === 'p1') ? this.turn.player2 : this.turn.player1;
    console.log("turn", this.currentTurn)
  }

  //cambia el estado de los objetos
  startGame() {
    //Guarda Tesoro1 y pasa la vez al Pirata2
    if (this.hidding.player1 === false && this.hidding.player2 === false) {
      if (this.player1.arrOfIdx.length === 3) {
        console.log("hey")
        this.hidding.player1 = true;
        this.player1.treasuresAt = Array.from(this.player1.arrOfIdx);
        console.log("111", this.hidding, "original", this.player1.arrOfIdx, "clone", this.player1.treasuresAt)
        this.newGame();
        // this.treasureOff();
        console.log("Pirata 1", this.player1.treasuresAt)
        this.boardsService.printTreasures(this.player1.treasuresAt)
        this.boardsService.player('Pirata 2 : Guarde el tesoro!')
      }
    //Guarda Tesoro2 y pasa la vez al Pirata1  - Inicia el Juego
    } else if (this.hidding.player1 === true && this.hidding.player2 === false) {
      if (this.player2.arrOfIdx.length === 3) {
        console.log("hey")
        this.hidding.player2 = true;
        this.player2.treasuresAt = Array.from(this.player2.arrOfIdx);
        console.log("111", this.hidding, "original", this.player2.arrOfIdx, "clone", this.player2.treasuresAt)
        this.newGame();
        // this.treasureOff();
        console.log("Pirata 2", this.player2.treasuresAt)
        // this.boardsService.printTreasures(this.player2.treasuresAt)
        this.boardsService.player('Pirata 1')
        this.boardsService.enemy("enemy")
      }
    }
  };

  //Identifica ataque - tesoro || calavera
  makeMove(idx: number) {
    console.log(idx)
    console.log(idx, !this.squares[idx], this.squares, this.index)
    this.player2.treasuresAt.forEach(a => {
      if (!this.squares[idx]) {
        if (idx === a) {
          this.index = true;
          this.player1.score = this.player1.score+1;
          this.boardsService.score1(this.player1.score)
          this.squares.splice(idx, 1, this.index);
          console.log("tesoro", this.squares, this.player1.score)
        }
        else {
          console.log('calavera')
          this.index = false;
          this.squares.splice(idx, 1, this.index);
        }
      }
    })
  };

}
