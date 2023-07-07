import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  uname: string;
  
  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();
  passData() {
    this.notify.emit("Rps Consulting");
  }
}
