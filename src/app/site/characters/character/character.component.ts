import {Component, Input, OnInit} from '@angular/core';
import {Character} from '@core/character.model';
import {MatDialog} from '@angular/material';
import {ProfileDialogComponent} from '../../../shared/utils/dialogs/profile-dialog/profile-dialog.component';
import {ComicDialogComponent} from '../../../shared/utils/dialogs/comic-dialog/comic-dialog.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  showCharacterProfile() {
    this.dialog.open(ProfileDialogComponent, {
      data: this.character,
    });
  }

  showComicDescription(comic) {
    this.dialog.open(ComicDialogComponent, {
      data: comic,
    });
  }
}
