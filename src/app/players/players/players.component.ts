import { Component, OnInit } from '@angular/core';

import { Player } from '../model/player';
import { PlayersService } from './../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: Player[];
  displayedColumns = ['name', 'team'];

  constructor(private playersService: PlayersService) {
    this.players = this.playersService.getPlayers();
  }

  ngOnInit(): void {}
}
