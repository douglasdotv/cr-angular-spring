import { Component, OnInit } from '@angular/core';

import { Team } from '../model/team';
import { Observable } from 'rxjs';
import { TeamsService } from './../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: Observable<Team[]> = new Observable<Team[]>();
  displayedColumns = ['name', 'league'];

  constructor(private teamsService: TeamsService) {

  }

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams();
  }
}
