import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MarvelApiService} from '@services/marvel-api.service';
import {LoaderService} from '@services/loader.service';
import {finalize, map} from 'rxjs/operators';

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.scss']
})
export class ComicDialogComponent implements OnInit {
  comic: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private marvelApiService: MarvelApiService,
    private loaderService: LoaderService,
  ) {
  }

  ngOnInit(): void {
    this.getComic(this.data);
  }

  getComic(comic: string) {
    this.marvelApiService.getComicDataFromUrl(comic).subscribe(data => {
      this.comic = data.data.results[0];
      console.log(this.comic);
    });
  }
}
