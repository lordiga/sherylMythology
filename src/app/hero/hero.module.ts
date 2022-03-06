import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { PerseusComponent } from './perseus/perseus.component';
import { TheseusComponent } from './theseus/theseus.component';
import { HerculesComponent } from './hercules/hercules.component';
import { AtalantaComponent } from './atalanta/atalanta.component';
import { HeroListComponent } from './hero-list/hero-list.component';



@NgModule({
  declarations: [
    PerseusComponent,
    TheseusComponent,
    HerculesComponent,
    AtalantaComponent,
    HeroListComponent
  ],
  exports: [
    PerseusComponent,
    TheseusComponent,
    HerculesComponent,
    AtalantaComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class HeroModule { }
