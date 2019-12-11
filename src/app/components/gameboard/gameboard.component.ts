import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
 
  constructor(public boardsService: BoardsService) { }

  ngOnInit() {
  }

  newGame() {
    console.log("uii")
    this.boardsService.getAnswer({
      squares: Array(9).fill(null),
      winner: null,
      index: true,
      arrOfIdx: [],
      hidddingAt:[]
      })
  }
}
