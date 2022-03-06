import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdonisComponent } from './flower/adonis/adonis.component';
import { FlowerListComponent } from './flower/flower-list/flower-list.component';
import { HyacinthComponent } from './flower/hyacinth/hyacinth.component';
import { NarcissusComponent } from './flower/narcissus/narcissus.component';
import { AphroditeComponent } from './god/aphrodite/aphrodite.component';
import { ApolloComponent } from './god/apollo/apollo.component';
import { AresComponent } from './god/ares/ares.component';
import { ArtemisComponent } from './god/artemis/artemis.component';
import { AthenaComponent } from './god/athena/athena.component';
import { DemeterComponent } from './god/demeter/demeter.component';
import { DionysosComponent } from './god/dionysos/dionysos.component';
import { GodListComponent } from './god/god-list/god-list.component';
import { GodTreeComponent } from './god/god-tree/god-tree.component';
import { HephaistosComponent } from './god/hephaistos/hephaistos.component';
import { HeraComponent } from './god/hera/hera.component';
import { HermesComponent } from './god/hermes/hermes.component';
import { PoseidonComponent } from './god/poseidon/poseidon.component';
import { ZeusComponent } from './god/zeus/zeus.component';
import { AtalantaComponent } from './hero/atalanta/atalanta.component';
import { HerculesComponent } from './hero/hercules/hercules.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { PerseusComponent } from './hero/perseus/perseus.component';
import { TheseusComponent } from './hero/theseus/theseus.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'godList', 
        children: [
          { path: '', component: GodListComponent },
          { path: 'aphrodite', component: AphroditeComponent },
          { path: 'apollo', component: ApolloComponent },
          { path: 'ares', component: AresComponent },
          { path: 'artemis', component: ArtemisComponent },
          { path: 'athena', component: AthenaComponent },
          { path: 'hestia', component: DemeterComponent },
          { path: 'hades', component: DionysosComponent },
          { path: 'hephaestus', component: HephaistosComponent },
          { path: 'hera', component: HeraComponent },
          { path: 'hermes', component: HermesComponent },
          { path: 'poseidon', component: PoseidonComponent },
          { path: 'zeus', component: ZeusComponent },
        ]
      },
      { 
        path: 'heroList', 
        children: [
          { path: '', component: HeroListComponent },
          { path: 'atalanta', component: AtalantaComponent },
          { path: 'hercules', component: HerculesComponent },
          { path: 'perseus', component: PerseusComponent },
          { path: 'theseus', component: TheseusComponent },
        ]
       },
      { 
        path: 'flowerList', 
        children: [
          { path: '', component: FlowerListComponent },
          { path: 'adonis', component: AdonisComponent },
          { path: 'hyacinth', component: HyacinthComponent },
          { path: 'narcissus', component: NarcissusComponent },
        ]
      },
      { path: 'godTree', component: GodTreeComponent },
      { path: 'reference', component: ReferenceComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
