import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Player } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private readonly API = '/api/players';

  constructor(private httpClient: HttpClient) {}

  getPlayers() {
    return this.httpClient.get<Player[]>(this.API).pipe(first());
  }
}
