import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListComponent } from './components/status-list/status-list.component';

const routes: Routes = [
  { path: '', component: StatusListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
