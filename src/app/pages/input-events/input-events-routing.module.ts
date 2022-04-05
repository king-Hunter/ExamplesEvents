import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputEventsPage } from './input-events.page';

const routes: Routes = [
  {
    path: '',
    component: InputEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputEventsPageRoutingModule {}
