import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent {
  @Output() comicClicked: EventEmitter<string> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  showComicDescription(comic: any) {
    this.comicClicked.emit(comic);
  }
}
