import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchField: FormControl = new FormControl();
  @Output() searchCharacter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.searchField.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        keyword => this.searchCharacter.emit(keyword)
      );

  }
}
