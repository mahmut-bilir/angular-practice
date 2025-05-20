import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LoggerService } from './services/logger.service'
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HelloWorldComponent,
    UserCardComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = [];


  constructor(private logger: LoggerService, private PostService: PostService) { }
  ngOnInit() {
    this.PostService.getPosts().subscribe((data) => {
      this.posts = data
    });
  }


  logMessage() {
    this.logger.log("Hello Mahmut Bilir!");
  }

  title = 'angular-practice';
  userName = "Mahmut";
  message = "";
  onUserSelected(eventData: string) {
    this.message = eventData;
  }
  name = '';
  onSubmit() {
    console.log('Submitted name:', this.name);
  }
  nameControl = new FormControl('');

  submitForm() {
    console.log('Name : ', this.nameControl.value);
  }
}
