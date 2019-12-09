import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  chest: string = '../../../assets/img/chest.jpg';
  skull: string = '../../../assets/img/skull.png';

  @Input()value:string;

}
