import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  template: '<p>User Name : {{name}}</p> <button (click)="notifyParent()">Select</button>'
})
export class UserCardComponent {
  @Input() name: string = "";
  @Output() selected = new EventEmitter<string>();
  notifyParent() {
    this.selected.emit("Mahmut selected!");
  }

}
