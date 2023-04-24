import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, TeamsRoutingModule, AppMaterialModule],
})
export class TeamsModule {}
