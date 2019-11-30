import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';
import {environment} from '@environments/environment';
import {HttpApi} from '@core/http/http-api';

const BACKEND_DATA = environment.backend;

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  TS = new Date().getTime();
  PAGE_LIMIT = '100';
  HASH = Md5.hashStr(`${this.TS}${BACKEND_DATA.private_key}${BACKEND_DATA.public_key}`);
  AUTH = `?ts=${this.TS}&apikey=${BACKEND_DATA.public_key}&hash=${this.HASH}`;
  API_URL = `${BACKEND_DATA.host}${HttpApi.marvelCharacters}`;


  constructor(private http: HttpClient) {
  }

  getAllCharacters(orderBy: string = 'name', keyword?: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', this.PAGE_LIMIT);
    // params = params.append('offset', String(offset));
    params = params.append('orderBy', orderBy);
    if (keyword) {
      params = params.append('nameStartsWith', keyword);
    }
    return this.http.get<any>(this.API_URL + this.AUTH, {params})
      .pipe(
        map((data: any) => data.data)
      );
  }

  getComicDataFromUrl(url: string) {
    url = url.split('/').pop();
    return this.http.get<any>(`${BACKEND_DATA.host}${HttpApi.marvelComicByID}${url}${this.AUTH}`);
  }

  getComicsByCharacter(id: number) {
    return this.http.get<any>(`${this.API_URL}/${id}${HttpApi.marvelCharactersComic}${this.AUTH}`)
      .pipe(
        map((data: any) => data.data)
      );
  }
}
