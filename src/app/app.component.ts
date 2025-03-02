import { Component } from '@angular/core';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  imports: [
    HelloWorldComponent
  ],
  template: `
    <app-hello-world></app-hello-world>
  `,
})
export class AppComponent {}
