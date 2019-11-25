import {Injectable} from '@angular/core';
import {Adapter} from './adapter';

export class Character {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
  allComics: any[];
  comicList: any[];

  constructor(object: any) {
    this.name = object.name;
    this.id = object.id;
    this.thumbnail = `${object.thumbnail.path}.${object.thumbnail.extension}`;
    this.description = object.description ? object.description : 'Description not available';
    this.allComics = object.comics.items;
    this.comicList = this.getRandomComicList(4);
  }

  getRandomComicList(size: number = 4) {
    const list = [];
    if (this.allComics.length) {
      for (let i = 0; i < size; i++) {
        list.push(this.allComics[Math.floor(Math.random() * this.allComics.length)]);
      }
    }
    return list;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CharacterAdapter implements Adapter<Character> {

  adapt(character: any): Character {
    return new Character(character);
  }
}
