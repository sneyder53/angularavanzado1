import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminGuard } from '../services/admin.guard';


const adminroutes: Routes = [
  { path: 'admin-panel', component: MainComponent,
    canActivate: [AdminGuard],
    children:[
      {path:'', redirectTo: 'listado', pathMatch: 'full' },
      {path:'listado', component: ListComponent },
      {path:'crear', component: AddComponent },
      {path:'editar/:id', component: EditComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
