import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MatTableModule
  ]
})
export class PlayersModule { }
