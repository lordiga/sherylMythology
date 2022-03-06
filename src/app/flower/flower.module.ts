import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NarcissusComponent } from './narcissus/narcissus.component';
import { HyacinthComponent } from './hyacinth/hyacinth.component';
import { AdonisComponent } from './adonis/adonis.component';
import { FlowerListComponent } from './flower-list/flower-list.component';



@NgModule({
  declarations: [
    NarcissusComponent,
    HyacinthComponent,
    AdonisComponent,
    FlowerListComponent
    
  ],
  exports: [
    NarcissusComponent,
    HyacinthComponent,
    AdonisComponent,
    FlowerListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class FlowerModule { }
