import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Player } from '../model/player';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private readonly API = '/assets/players.json';

  constructor(private httpClient: HttpClient) {}

  getPlayers() {
    return this.httpClient
      .get<Player[]>(this.API)
      .pipe(first(), tap((players) => console.log('players: ', players)));
  }
}
