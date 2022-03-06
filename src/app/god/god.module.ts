import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GojsAngularModule} from 'gojs-angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { ZeusComponent } from './zeus/zeus.component';
import { HeraComponent } from './hera/hera.component';
import { AthenaComponent } from './athena/athena.component';
import { ApolloComponent } from './apollo/apollo.component';
import { PoseidonComponent } from './poseidon/poseidon.component';
import { AresComponent } from './ares/ares.component';
import { ArtemisComponent } from './artemis/artemis.component';
import { DemeterComponent } from './demeter/demeter.component';
import { AphroditeComponent } from './aphrodite/aphrodite.component';
import { DionysosComponent } from './dionysos/dionysos.component';
import { HermesComponent } from './hermes/hermes.component';
import { HephaistosComponent } from './hephaistos/hephaistos.component';
import { GodTreeComponent } from './god-tree/god-tree.component';
import { GodListComponent } from './god-list/god-list.component';



@NgModule({
  declarations: [
    ZeusComponent,
    HeraComponent,
    AthenaComponent,
    ApolloComponent,
    PoseidonComponent,
    AresComponent,
    ArtemisComponent,
    DemeterComponent,
    AphroditeComponent,
    DionysosComponent,
    HermesComponent,
    HephaistosComponent,
    GodTreeComponent,
    GodListComponent
  ],
  exports: [
    ZeusComponent,
    HeraComponent,
    AthenaComponent,
    ApolloComponent,
    PoseidonComponent,
    AresComponent,
    ArtemisComponent,
    DemeterComponent,
    AphroditeComponent,
    DionysosComponent,
    HermesComponent,
    HephaistosComponent,
    GodTreeComponent,
    GodListComponent
  ],
  imports: [
    CommonModule,
    GojsAngularModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class GodModule { }
