import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputEventsPageRoutingModule } from './input-events-routing.module';

import { InputEventsPage } from './input-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputEventsPageRoutingModule
  ],
  declarations: [InputEventsPage]
})
export class InputEventsPageModule {}
