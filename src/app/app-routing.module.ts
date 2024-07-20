import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import path from 'path';

const routes: Routes = [
  {
    path: 'view-tasks',
    component: ViewTasksComponent
  },
  {
    path: '',
    redirectTo: '/view-tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
