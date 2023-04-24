import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Player } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private readonly API = '/assets/players.json';

  constructor(private httpClient: HttpClient) {}

  getPlayers() {
    return this.httpClient.get<Player[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((players) => console.log('players: ', players)) // test
    );
  }
}
