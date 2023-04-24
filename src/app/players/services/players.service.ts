import { Injectable } from '@angular/core';

import { Player } from '../model/player';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getPlayers(): Player[] {
    return [
      { _id: '221684575', name: 'Thomas Thomas', team: 'Pajala Sunrise' },
      { _id: '220070532', name: 'West Java', team: 'Penang' },
    ];
  }
}
