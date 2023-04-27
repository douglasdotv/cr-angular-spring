import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private readonly API = '/api/teams';

  constructor(private httpClient: HttpClient) {}

  getTeams() {
    return this.httpClient.get<Team[]>(this.API).pipe(first());
  }
}
