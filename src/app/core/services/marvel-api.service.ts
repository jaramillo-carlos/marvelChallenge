import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';
import {environment} from '@environments/environment';
import {HttpApi} from '@core/http/http-api';

const BACKEND_DATA = environment.backend;

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  TS = new Date().getTime();
  PAGE_LIMIT = '10';
  HASH = Md5.hashStr(`${this.TS}${BACKEND_DATA.private_key}${BACKEND_DATA.public_key}`);
  API_URL = `${BACKEND_DATA.host}${HttpApi.marvelCharacters}ts=${this.TS}&apikey=${BACKEND_DATA.public_key}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {
  }

  getAllCharacters(offset: number, keyword?: string, orderBy: string = 'name'): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', this.PAGE_LIMIT);
    params = params.append('offset', String(offset));
    params = params.append('orderBy', orderBy);
    if (keyword) {
      params = params.append('nameStartsWith', keyword);
    }
    return this.http.get<any>(this.API_URL, {params})
      .pipe(
        map((data: any) => data.data)
      );
  }
}
