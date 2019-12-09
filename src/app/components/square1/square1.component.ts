import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square1',
  templateUrl: './square1.component.html',
  styleUrls: ['./square1.component.css']
})
export class Square1Component {

  @Input()value: 'X'|'O';

}
