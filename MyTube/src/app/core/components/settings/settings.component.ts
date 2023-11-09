import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
 isSortingVisible: boolean = false;

 @Output() changeSortingVisibility = new EventEmitter<boolean>();

 turnSortingVisibility(visibility: boolean){
  this.changeSortingVisibility.emit(visibility);
 }
}
