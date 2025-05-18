import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LoggerService } from './services/logger.service'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HelloWorldComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logger: LoggerService) { }
  logMessage() {
    this.logger.log("Hello Mahmut Bilir!");
  }

  title = 'angular-practice';
  userName = "Mahmut";
  message = "";
  onUserSelected(eventData: string) {
    this.message = eventData;
  }
}
