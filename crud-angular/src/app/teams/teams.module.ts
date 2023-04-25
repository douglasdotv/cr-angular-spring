import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, TeamsRoutingModule, AppMaterialModule, SharedModule],
})
export class TeamsModule {}
