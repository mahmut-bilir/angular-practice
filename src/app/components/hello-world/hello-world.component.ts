import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name = "Mahmut";
  imageUrl = "https://example.com/image.jpg";
  sayHi() {
    alert("Hello!");
  }
  isLoggedIn = false;
  users = ['Mahmut', 'Ali', 'Murat'];
}
