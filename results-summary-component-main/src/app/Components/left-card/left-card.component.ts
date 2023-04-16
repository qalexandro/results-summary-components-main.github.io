import { Component, Input } from '@angular/core';
import { LeftCard } from 'src/app/Models/leftcard.models';

@Component({
  selector: 'app-left-card',
  templateUrl: './left-card.component.html',
  styleUrls: ['./left-card.component.css'],
})
export class LeftCardComponent {
  @Input() leftCardData!: LeftCard;
}
