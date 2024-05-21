import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { AnimatedSquareComponent } from './animated-square/animated-square.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    DropdownComponent,
    RouterOutlet,
    AnimatedSquareComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  themes = ["blue", "green"];

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}
