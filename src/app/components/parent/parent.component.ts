import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
      <h1>Parent Component</h1>
      <app-child 
        [name]="parentName"
        (buttonClicked)="handleClick($event)">
      </app-child>
    `
  })
  export class ParentComponent {
    parentName = 'John';  // Data to send to child
  
    handleClick(message: string) {
      console.log(message);  // Logs: "Button clicked by John"
    }
  }