import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  template: '<p>User Name : {{name}}</p>'
})
export class UserCardComponent {
  @Input() name: string = "";
}
