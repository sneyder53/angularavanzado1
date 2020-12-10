import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'tienda', component: TiendaComponent},
  {path:'home', component: HomeComponent},
  {path:'animales', component: AnimalsComponent},
  {path:'contacto', component: ContactComponent},
  {path:'cuidadores', component: KeeperComponent},
  {path:'registro', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'mis-datos', component: UserEditComponent},
  {path:'animal/:id', component: AnimalDetailComponent},
  //{path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
