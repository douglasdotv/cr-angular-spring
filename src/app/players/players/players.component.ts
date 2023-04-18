import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

    players: Player[];
    displayedColumns = ['name', 'team'];

    constructor() {
      this.players = [
        { _id: '221684575', name: 'Thomas Thomas', team: 'Pajala Sunrise' },
        { _id: '220070532', name: 'West Java', team: 'Penang' },
      ];
    }

    ngOnInit(): void {
      // nothing to do
    }

}
