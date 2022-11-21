import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPageRoutingModule } from './characters-details-routing.module';

import { CharacterDetailsPage } from './characters-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailsPageRoutingModule
  ],
  declarations: [CharacterDetailsPage]
})
export class CharacterDetailsPageModule {}
