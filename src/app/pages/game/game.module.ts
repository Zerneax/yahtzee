import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
