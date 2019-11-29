import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MarvelApiService} from '@services/marvel-api.service';
import {Comic} from '@core/comic.model';
import {FavouriteComicsService} from '@services/favourite-comics.service';

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.scss']
})
export class ComicDialogComponent implements OnInit {
  favourites: Array<Comic> = [];
  comicFavourite: boolean = false;
  comic: Comic;

  @Output() selectedFavourite: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private marvelApiService: MarvelApiService,
    private favouriteComicsService: FavouriteComicsService
  ) {
  }

  ngOnInit(): void {
    this.getComic(this.data);
  }

  getComic(comicUrl: string) {
    this.marvelApiService.getComicDataFromUrl(comicUrl).subscribe(data => {
      this.comic = data.data.results[0];
      this.favourites = this.favouriteComicsService.getAll();
      const existObject = this.favourites.filter(comic => comic.id === this.comic.id);
      if (existObject.length > 0) {
        this.comicFavourite = true;
      }
    });
  }

  addToFavourites() {
    this.favourites = this.favouriteComicsService.getAll();
    const existComic = this.favourites.filter(eachComic => eachComic.id === this.comic.id);
    if (existComic.length === 0) {
      this.favourites.push(this.comic);
      this.favouriteComicsService.saveAll(this.favourites);
      this.comicFavourite = true;
    }
  }
}
