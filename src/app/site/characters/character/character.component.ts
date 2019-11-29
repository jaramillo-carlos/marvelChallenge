import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '@core/character.model';
import {MarvelApiService} from '@services/marvel-api.service';
import {LoaderService} from '@services/loader.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;

  @Output() public selectedComic = new EventEmitter();
  @Output() public selectedCharacter = new EventEmitter();

  constructor(
    private marvelApiService: MarvelApiService,
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
  }

  openModalComic(comic) {
    this.loaderService.show();
    this.marvelApiService.getComicDataFromUrl(comic.resourceURI).subscribe(data => {
        this.selectedComic.emit(data.data.results[0]);
      }, (error) => {
        console.log(error);
      },
      () => this.loaderService.hide());
  }

  openModalCharacter(character) {
    this.selectedCharacter.emit(character);
  }

  showCharacterProfile() {
    /*
    this.DialogRef = this.dialog.open(ProfileDialogComponent, {
      data: this.character,
    });
    const dialogSubmitSubscription = this.DialogRef.componentInstance.comicClicked
      .subscribe(result => {
        dialogSubmitSubscription.unsubscribe();
        this.showComicDescription(result);
      });*/
  }

  showComicDescription(comic) {
    /*
    this.dialog.open(ComicDialogComponent, {
      data: comic.resourceURI,
    });
    */
  }
}
