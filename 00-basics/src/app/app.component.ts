// ! Decorator for Definition a Class as a Component :
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello world</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [''],
})
export class AppComponent {
  name = 'Karim';
  imageURL =
    'https://images.unsplash.com/photo-1615754925954-435b08409d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

  getName() {
    return this.name;
  }
}
