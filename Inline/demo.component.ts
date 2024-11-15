import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  template: `
    <h1 [class] = "'blue'">Marvellous Infosystems</h1>
  `,
  styles: `.blue
  {
    color:blue;
  }
  `
})
export class DemoComponent {

}
