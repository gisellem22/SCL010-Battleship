import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  chest: string = '../../../assets/img/chest2.png';
  skull: string = '../../../assets/img/skull2.png';

  @Input()value:string;

}
