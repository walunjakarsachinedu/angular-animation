import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  animations: [
    trigger("showHide", [
      state("show", style({
        height: '*',
        width: '*',
        opacity: 1
      })),
      state("hide", style({
        height: 0,
        width: '*',
        opacity: 0
      })),
      transition("show <=> hide", [
        animate("0.3s 0s ease")
      ])
    ]),
    trigger("rotatedUnRotated", [
      state("rotated", style({
        transform: "rotate(180deg)"
      })),
      state("unrotated", style({
        transform: "rotate(0deg)"
      })),
      transition("rotated <=> unrotated", [
        // style({transform: "*"}),
        animate(".2s 0s ease")
      ]),
    ])
  ]
})
export class DropdownComponent {
  @Input() selected = "green";
  @Input() items : string[] = ["blue", "green"];
  @Output() onItemSelect = new EventEmitter<string>();

  isDropdownOpen = false;
  // selected = "hello world";

  selectItem(item: string) {
    this.selected = item;
    this.isDropdownOpen = !this.isDropdownOpen;
    this.onItemSelect.emit(item);
  }
}
