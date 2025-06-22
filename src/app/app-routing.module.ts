import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusListComponent } from './components/status-list/status-list.component';
import { StatusDetailComponent } from './components/status-detail/status-detail.component';
import { StatusAddComponent } from './components/status-add/status-add.component';

const routes: Routes = [
  { path: '', component: StatusListComponent },
  { path: 'status/:id', component: StatusDetailComponent},
  { path: 'add', component: StatusAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
