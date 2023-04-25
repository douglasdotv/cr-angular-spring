import { Component, OnInit } from '@angular/core';

import { Player } from '../model/player';
import { Observable, catchError, of } from 'rxjs';
import { PlayersService } from './../services/players.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players$: Observable<Player[]> = new Observable<Player[]>();
  displayedColumns = ['name', 'team'];

  constructor(
    private playersService: PlayersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers().pipe(
      catchError((err) => {
        this.openDialog('Error loading players');
        return of([]);
      })
    );
  }

  openDialog(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
