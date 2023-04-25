import { Component, OnInit } from '@angular/core';

import { Team } from '../model/team';
import { Observable, catchError, of } from 'rxjs';
import { TeamsService } from './../services/teams.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]> = new Observable<Team[]>();
  displayedColumns = ['name', 'league'];

  constructor(private teamsService: TeamsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.teams$ = this.teamsService.getTeams().pipe(
      catchError((err) => {
        this.openDialog('Error loading teams');
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
