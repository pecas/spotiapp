import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

artistas: any[] = [];

  constructor( public http: HttpClient) { }

   getArtistas(termino: string) {
console.log(termino);
    const url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`;

    const headers = new HttpHeaders({
      'authorization': 'Bearer BQCu8mvdN-VH3rzntDKq4CTOREmjGgm8cGS9OMmgpyjYdSMVeLU3QJ9olfvlRZs4fRuFT3RmTFQ8syG88Sc'
    });

   return  this.http.get(url, { headers} )
    .map( (res: any) => {
        this.artistas = res.artists.items;
        return this.artistas;
    });
   }

}
