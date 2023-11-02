import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sendToParent = new EventEmitter<string>();

  getDataFromChild($event: string) {
    console.log('received data from search-bar child component');
    this.sendToParent.emit($event);
  }
}
