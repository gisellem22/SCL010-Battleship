import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  player:string;

  constructor(public boardsService:BoardsService) { }

  ngOnInit() {
    this.boardsService.newPlayerObservable.subscribe(player =>{
      this.player = player;
      console.log(this.player)
    })
  }
}
