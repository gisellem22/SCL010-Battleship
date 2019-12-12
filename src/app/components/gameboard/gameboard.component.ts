import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  hola:string;

  constructor(public boardsService:BoardsService) { }

  ngOnInit() {
  }
start (hola:string) {

  this.hola = this.boardsService.hola(hola)
}
}
