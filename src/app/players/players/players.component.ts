import { Component, OnInit } from '@angular/core';

import { Player } from '../model/player';
import { Observable } from 'rxjs';
import { PlayersService } from './../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players$: Observable<Player[]> = new Observable<Player[]>();
  displayedColumns = ['name', 'team'];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers();
  }
}
