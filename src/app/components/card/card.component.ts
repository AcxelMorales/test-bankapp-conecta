import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cantidad: number;
  @Input() first: string;
  @Input() second: string;

  constructor() { }

}
