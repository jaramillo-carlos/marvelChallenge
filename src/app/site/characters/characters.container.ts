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

  constructor(
    private marvelApiService: MarvelApiService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private adapter: CharacterAdapter
  ) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      pages: 1,
      totalItems: 0
    };
    route.queryParams.subscribe(params => this.config.currentPage = params.page ? (params.page - 1) * this.config.itemsPerPage : 1);
  }

  ngOnInit() {
    this.getCharacters(this.config.currentPage, this.keyword);
  }

  ngOnChanges() {
    this.getCharacters(this.config.currentPage, this.keyword);
  }

  getCharacters(offset, keyword?) {
    this.loaderService.show();
    this.allCharacters = this.marvelApiService.getAllCharacters(offset, keyword)
      .pipe(
        map(data => {
          this.config.totalItems = data.total;
          this.config.pages = Math.ceil(data.total / this.config.pages.itemsPerPage);
          return data.results.map(character => this.adapter.adapt(character));
        }),
        finalize(() => this.loaderService.hide())
      );
  }
}
