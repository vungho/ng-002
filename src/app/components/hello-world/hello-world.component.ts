import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <h1>{{ greeting }}</h1>
    <button (click)="changeGreeting()">Change Greeting</button>
  `,
  styles: [`
    h1 { color: blue; }
  `]
})
export class HelloWorldComponent {
  greeting = 'Hello, World!';

  changeGreeting() {
    this.greeting = 'Hello, Angular!';
  }
}