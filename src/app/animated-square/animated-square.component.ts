import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-square',
  standalone: true,
  imports: [CommonModule],
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
    trigger("presence", [
      transition('void => *', [
        style({ opacity: 0, height: '0px'}),
        animate('.3s 0s ease', style({opacity: 1, height: '*'}))
      ]),
      transition('* => void', [
        style({ opacity: 1, height: '*'}),
        animate('.3s 0s ease', style({opacity: 0, height: '0px'}))
      ])
    ]),
  ],
})
export class AnimatedSquareComponent {

  public isOpen=false;
  public isPresent = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  togglePresence() {
    this.isPresent = !this.isPresent;
  }
}
