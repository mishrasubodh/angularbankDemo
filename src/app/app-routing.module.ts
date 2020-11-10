import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {DataDirectiveComponent } from './data-directive/data-directive.component';
import {DataFormComponent } from './data-form/data-form.component'
import {DataTableComponent} from './data-table/data-table.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path: 'directive',component: DataDirectiveComponent },
  { path: 'form',component: DataFormComponent },
  { path: 'table',component: DataTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
