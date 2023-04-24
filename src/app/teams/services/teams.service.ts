import { Injectable } from '@angular/core';

import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}

  getTeams(): Team[] {
    return [
      { _id: '36936', name: 'Pajala Sunrise', league: 'Sweden' },
      { _id: '373367', name: 'Yelonki', league: 'Poland' },
    ];
  }
}