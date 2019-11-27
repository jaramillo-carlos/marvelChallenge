import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.scss']
})
export class ComicDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {

  }
}
