import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  laLetra: any;
  constructor(private songService: LyricsService) { }

  ngOnInit(): void {
  }

  getSong(artist, song) {
    //console.log('Quiero buscar ' + artist + '  y la canción ' + song);
    this.songService.getSong(artist, song).subscribe(lyrics => this.laLetra = lyrics);
  }

}
