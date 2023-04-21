import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

    teams: Team[];
    displayedColumns = ['name', 'league'];

    constructor() {
      this.teams = [
        { _id: '36936', name: 'Pajala Sunrise', league: 'Sweden' },
        { _id: '373367', name: 'Yelonki', league: 'Poland' },
      ];
    }

    ngOnInit(): void {
      // nothing to do
    }

}
