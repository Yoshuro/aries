import { Component } from '@angular/core'
import { SpotifyService } from '../../services/spotify.service'
import { Artist } from '../../models/Artist'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  query:string
  result: Artist[]

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    this._spotifyService.fetchMusicData(this.query)
      .subscribe((res) => {
        this.result = res.artists.items
      })
  }
}
