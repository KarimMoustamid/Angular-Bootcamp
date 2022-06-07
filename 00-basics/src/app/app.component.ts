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
  imageURL = 'https://picsum.photos/id/237/200/300';

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imageURL = (e.target as HTMLInputElement).value;
  }
}
