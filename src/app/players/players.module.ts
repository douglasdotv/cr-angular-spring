import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule, PlayersRoutingModule, AppMaterialModule],
})
export class PlayersModule {}
