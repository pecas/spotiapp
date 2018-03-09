import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  termino = '';

  constructor(public _spotifyService: SpotifyService) { }

   buscarArtista() {
     if ( this.termino.length == 0) {
       return;
     }
     this._spotifyService.getArtistas(this.termino)
     .subscribe(artistas => {
               console.log(artistas);
               }
    );
   }
}
