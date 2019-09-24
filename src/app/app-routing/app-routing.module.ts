import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from '../start/start.component';
import {DetailComponent} from '../detail/detail.component';
import {CreateComponent} from '../create/create.component';
import {ContractReadyResolver} from '../resolver/ContractReadyResolver';
import {CollectibleService} from '../collectible.service';
import {CreateAudioComponent} from '../create/create-audio/create-audio.component';
import {CreateVideoComponent} from '../create/create-video/create-video.component';
import {CreateTextComponent} from '../create/create-text/create-text.component';

const routes: Routes = [
  { path: 'start', component: StartComponent,
    resolve: {
      contractReady: ContractReadyResolver
    } },
  { path: '',   redirectTo: '/start', pathMatch: 'full' },
  { path: 'detail/:id',        component: DetailComponent,
    resolve: {
      contractReady: ContractReadyResolver
    }},
  { path: 'create',   component: CreateComponent,
    resolve: {
      contractReady: ContractReadyResolver
    },
  children : [
    { path: 'audio',   component: CreateAudioComponent,
    resolve: {
      contractReady: ContractReadyResolver
    }},
    { path: 'video',   component: CreateVideoComponent,
      resolve: {
        contractReady: ContractReadyResolver
      }},
    { path: 'text',   component: CreateTextComponent,
      resolve: {
        contractReady: ContractReadyResolver
      }}] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CollectibleService, ContractReadyResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
