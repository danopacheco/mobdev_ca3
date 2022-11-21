import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsPage } from './characters-details.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDetailsPageRoutingModule {}
