import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuloEmailModule } from './modulo-email/modulo-email.module';
import { AdminModule } from './admin/admin.module';

import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
//Servicios
import { UserService } from './services/user.service';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
