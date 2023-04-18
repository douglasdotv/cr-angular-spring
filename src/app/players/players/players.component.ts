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
      this.players = [];
    }

    ngOnInit(): void {
      // nothing to do
    }

}
