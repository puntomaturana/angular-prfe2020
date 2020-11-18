import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  //url del servidor
  //private serverURL: string = "https://private-anon-7d367a031c-lyricsovh.apiary-mock.com/v1/";
  private serverURL: string = "https://api.lyrics.ovh/v1/";
  //headers de la llamada a la api
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });
  //private Lyric: string;
  constructor(private http: HttpClient) { }

  //llamada a la API con los datos reales
  getSong(artist, title) {
    return this.http.get(this.serverURL + artist + '/' + title, { headers: this.headers });
  };
}
