import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MostrarEmailComponent } from '../modulo-email/components/mostrar-email/mostrar-email.component';
import { GuardarEmailComponent } from '../modulo-email/components/guardar-email/guardar-email.component';
import { MainEmailComponent } from '../modulo-email/components/main-email/main-email.component';


@NgModule({
  declarations: [
    MostrarEmailComponent,
    GuardarEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MostrarEmailComponent,
    GuardarEmailComponent,
    MainEmailComponent
  ]
})
export class ModuloEmailModule { }
