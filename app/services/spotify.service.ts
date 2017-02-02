import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
  constructor(private _http: Http) {}

  fetchMusicData(query: string, type = 'artist') {
    const url = `https://api.spotify.com/v1/search?query=${query}&type=${type}`
    return this._http.get(url)
      .map(res => res.json())
  }
}
