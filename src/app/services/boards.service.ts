import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BoardsService {
  squares: any[];
  index: boolean;
  winner: string;
  arrOfIdx: number[] = [];
  treasuresAt: number[] = [];
  game:any;

  hidding: any = {
    player1: false
  };

  public newGameSubject = new Subject <any>();
  newGameObservable = this.newGameSubject.asObservable();

  printTreasures(arr:number[]){
    this.treasuresAt = arr;
    this.newGameSubject.next(arr);
    };
  
  public newAttackSubject = new Subject <any>();
  newAttackObservable = this.newAttackSubject.asObservable();

  printAttack(arr:any[]){
    console.log(arr)
    this.squares = arr;
    this.newAttackSubject.next(arr);
    };
  
  constructor() { }

  
  
  // newGame() {
  //   this.squares = Array(9).fill(null);
  //   this.winner = null;
  //   this.index = true;
  //   this.arrOfIdx = [];
  //   console.log(this.squares, this.winner,this.index,this.arrOfIdx)
  //   return {
  //   squares: this.squares,
  //   winner: this.winner,
  //   index: this.index,
  //   arrOfIdx: this.arrOfIdx
  //   }
  // };

  // playGame(idx:number) {
  //   console.log("servicio", idx, this.hidding.player1)
  //   if (!this.hidding.player1){
  //     this.hideTreasures(idx)
  //   } else {
  //     this.makeMove(idx)
  //   }
  // };

  // hideTreasures(idx: number) {
  //   console.log("hide",idx)
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
  //     this.treasuresAt = Array.from(this.arrOfIdx);
  //     console.log("111",this.hidding,"original",this.arrOfIdx, "clone",this.treasuresAt)
  //     return this.newGame();
  //   } 
  // };


  // makeMove(idx: number) {
  //   console.log(idx)
  //   console.log(idx, !this.squares[idx], this.squares, this.index)
  //   this.treasuresAt.forEach(a => {
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

  hola (hola:string) {
    return hola;
  };
  
}
