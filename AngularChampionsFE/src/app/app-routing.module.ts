import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChampionListComponent} from "./components/champion-list/champion-list.component";
import {ChampionFormComponent} from "./champion-form/champion-form.component";

const routes: Routes = [
  {
    path: 'champions',
    component: ChampionListComponent
  },
  {
    path: 'create-champion',
    component: ChampionFormComponent
  },
  {
    path: '',
    redirectTo: 'champions',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
