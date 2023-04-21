import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class PlayersModule { }
