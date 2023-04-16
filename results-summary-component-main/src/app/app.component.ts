import { Component } from '@angular/core';
import { LeftCard } from './Models/leftcard.models';
import { RightCard } from './Models/rightcard.models';
import {
  aspects,
  bgColorContainer,
  bgColorCircle,
  bgColorButton,
} from './Utils/utils.exports';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'results-summary-component-main';

  rightCardData: RightCard = {
    title: 'Summary',
    aspects: aspects,
    button: ['Continue', bgColorButton],
  };

  leftCardData: LeftCard = {
    title: 'Your Result',
    score: 76,
    value: 'Great',
    resume: 'Your score higher than 65% of the people who taken these tests.',
    style: [bgColorContainer, bgColorCircle],
  };

  constructor(private faConfig: FaConfig) {
    this.faConfig.defaultPrefix = 'far';
  }
}
