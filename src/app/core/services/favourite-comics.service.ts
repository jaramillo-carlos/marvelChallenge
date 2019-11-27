import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteComicsService {

  constructor() {
  }

  getAll() {
    const data = JSON.parse(localStorage.getItem('favourites'));
    if (!data) {
      return [];
    }
    return data;
  }

  saveAll(data) {
    localStorage.setItem('favourites', JSON.stringify(data));
  }

}
