import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MarvelApiService} from '@services/marvel-api.service';
import {Observable, pipe} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize, map} from 'rxjs/operators';
import {Character, CharacterAdapter} from '@core/character.model';
import {LoaderService} from '@services/loader.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.container.html',
  styleUrls: ['./characters.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class CharactersContainer implements OnInit, OnChanges {
  @Input() keyword: string;
  config: any;
  allCharacters: Observable<Array<Character>>;
  page: number = 1;
  public order: string = 'name';

  constructor(
    private marvelApiService: MarvelApiService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private adapter: CharacterAdapter
  ) {
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
    console.log('cambio');
    this.getCharacters(this.order, this.keyword);
  }

}
