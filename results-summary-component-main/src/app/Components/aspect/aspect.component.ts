import { Component, Input } from '@angular/core';
import { Aspect } from 'src/app/Models/aspect.models';

@Component({
  selector: 'app-aspect',
  templateUrl: './aspect.component.html',
  styleUrls: ['./aspect.component.css'],
})
export class AspectComponent {
  @Input() aspects!: Aspect;
}
