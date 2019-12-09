import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square2',
  templateUrl: './square2.component.html',
  styleUrls: ['./square2.component.css']
})
export class Square2Component {

  @Input()value: 'X'|'O';

}

