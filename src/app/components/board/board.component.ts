import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  index: boolean;
  winner: string;
  // player1: string = 'p1';
  // player2: string = 'p2';
  // player: boolean;
  arrOfIdx: number[] = []
  areTreasuresHidden:any = {
    player1: false
  }

  constructor() { }

  ngOnInit() {
    this.newGame();
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
  hideTreasures(idx:number) {
    if(this.arrOfIdx.length <3){
      this.arrOfIdx.push(idx)
      this.index = true;
      this.squares.splice(idx, 1, this.index);
      console.log(this.arrOfIdx)
      this.changeHiddenState()
    } else {
      console.log("hasta aqui nomás")
    }
console.log(this.arrOfIdx)
  }
changeHiddenState() {
if (this.arrOfIdx.length === 3) {
  console.log("hey")
  this.areTreasuresHidden.player1 = true;
}
console.log(this.areTreasuresHidden)
}
}
