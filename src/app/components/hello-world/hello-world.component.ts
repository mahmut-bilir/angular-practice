import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name = "Mahmut";
  imageUrl = "https://example.com/image.jpg";
  sayHi() {
    alert("Hello!");
  }
}
