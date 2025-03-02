import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Hello, {{name}}!</h2>
    <button (click)="onClick()">Click me</button>
  `
})
export class ChildComponent {
  @Input() name: string = '';
  @Output() buttonClicked = new EventEmitter<string>();

  onClick() {
    this.buttonClicked.emit(`Button clicked by ${this.name}`);
  }
}