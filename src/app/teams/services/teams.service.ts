import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly API = '/assets/teams.json';

  constructor(private httpClient: HttpClient) {}

  getTeams() {
    return this.httpClient.get<Team[]>(this.API).pipe(
      first(),
      delay(2000),
      tap((teams) => console.log('teams: ', teams)) // test
    );
  }
}
