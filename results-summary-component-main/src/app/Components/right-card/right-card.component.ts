import { Component, Input } from '@angular/core';
import { Aspect } from 'src/app/Models/aspect.models';
import { RightCard } from 'src/app/Models/rightcard.models';

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css'],
})
export class RightCardComponent {
  @Input() rightCardData!: RightCard;

  onButtonClick() {
    console.log('Button clicked!!');
  }
}
