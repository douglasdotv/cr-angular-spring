import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Team } from '../model/team';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly API = '/assets/teams.json';

  constructor(private httpClient: HttpClient) {}

  getTeams() {
    return this.httpClient
      .get<Team[]>(this.API)
      .pipe(first(), tap((teams) => console.log('teams: ', teams)));
  }
}
