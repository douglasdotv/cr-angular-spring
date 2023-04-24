import { Component, OnInit } from '@angular/core';

import { Team } from '../model/team';
import { TeamsService } from './../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  displayedColumns = ['name', 'league'];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams();
  }
}
