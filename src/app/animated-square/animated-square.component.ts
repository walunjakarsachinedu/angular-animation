import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animated-square',
  standalone: true,
  imports: [],
  templateUrl: './animated-square.component.html',
  styleUrl: './animated-square.component.scss',
  animations: [
    trigger("openClose", [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed, closed => open', [
        animate('.3s 0s ease')
      ]),
    ]),
  ],
})
export class AnimatedSquareComponent {

  public isOpen=false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
