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
        height: '100px',
      })),
      state('closed', style({
        height: '40px',
      })),
      transition('open => closed', [
        animate('.3s 0s ease')
      ]),
      transition('closed => open', [
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
