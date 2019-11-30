import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MarvelApiService} from '@services/marvel-api.service';
import {Observable, of, pipe} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, finalize, map} from 'rxjs/operators';
import {Character, CharacterAdapter} from '@core/character.model';
import {LoaderService} from '@services/loader.service';
import {Comic} from '@core/comic.model';

declare var $: any;

@Component({
  selector: 'app-characters',
  templateUrl: './characters.container.html',
  styleUrls: ['./characters.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class CharactersContainer implements OnInit, OnChanges {
  @Input() keyword: string;
  // config: any;
  allCharacters: Observable<Array<Character>>;
  page: number = 1;
  comic: Comic = {
    id: 0,
    title: '',
    description: '',
    prices: '',
    thumbnail: null
  };
  public order: string = 'name';
  objFavourites = {};
  arrayFavourites = [];
  character: Character = {
    name: '',
    id: '',
    thumbnail: '',
    description: '',
    comicList: [],
    allComics: []
  };
  characterComics: Array<Comic>;

  constructor(
    private marvelApiService: MarvelApiService,
    private loaderService: LoaderService,
    // private route: ActivatedRoute,
    private adapter: CharacterAdapter
  ) {
    this.getAllFovourites();
    /*
     For paginate in server
     this.config = {
       itemsPerPage: 10,
       currentPage: 1,
       pages: 1,
       totalItems: 0
     };
    */
  }

  ngOnInit() {
    this.getCharacters(this.order, this.keyword);
  }

  ngOnChanges() {
    this.getCharacters(this.order, this.keyword);
  }

  openModalComic(event): void {
    this.comic = event;
    $('#comicModal').modal('toggle');
  }

  openModalCharacter(event): void {
    this.character = event;
    this.getComicsByCharacter(event.id);
    $('#characterModal').modal('toggle');
  }

  getCharacters(order, keyword?) {
    this.loaderService.show();
    this.allCharacters = this.marvelApiService.getAllCharacters(order, keyword)
      .pipe(
        map(data => {
          // this.config.totalItems = data.total;
          // this.config.pages = Math.ceil(data.total / this.config.pages.itemsPerPage);
          return data.results.map(character => this.adapter.adapt(character));
        }),
        finalize(() => this.loaderService.hide())
      );
  }

  sortSearch(newValueSortBy: string) {
    this.order = newValueSortBy;
    this.getCharacters(this.order, this.keyword);
  }

  addFavourite(item: any): boolean {
    this.objFavourites[item.id] = item;
    localStorage.setItem('favourites', JSON.stringify(this.objFavourites));
    this.getAllFovourites();
    return true;
  }

  removeFavourite(id): void {
    delete this.objFavourites[id];
    localStorage.setItem('favourites', JSON.stringify(this.objFavourites));
    this.getAllFovourites();
  }

  private getAllFovourites(): void {
    const comics = JSON.parse(localStorage.getItem('favourites')) || {};
    this.objFavourites = comics;
    this.arrayFavourites = Object.values(this.objFavourites);
  }

  isFavourite(id: number) {
    return id in this.objFavourites;
  }

  getComicPrice(prices) {
    return prices ? prices[0].price : '';
  }

  buyComic() {

  }

  addRandomFavourites(comicList) {
    const shuffled = comicList.sort(() => 0.5 - Math.random());
    const random = shuffled.slice(0, 3);
    random.forEach((comic) => {
      this.addFavourite(comic);
    });
  }

  private getComicsByCharacter(id: any) {
    this.loaderService.show();
    this.marvelApiService.getComicsByCharacter(id).subscribe(data => {
      this.characterComics = data.results;
      this.loaderService.hide();
    }, (error) => {
      console.log(error);
    });
  }
}
