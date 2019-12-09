import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enemy-square',
  templateUrl: './enemy-square.component.html',
  styleUrls: ['./enemy-square.component.css']
})
export class EnemySquareComponent {

  @Input()value: 'X'|'O';

}

