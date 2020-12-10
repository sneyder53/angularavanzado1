import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { AdminGuard } from '../services/admin.guard';
import { SearchPipe } from './pipes/search.pipe';




@NgModule({
  declarations: [MainComponent, ListComponent, AddComponent, EditComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  providers: [AdminGuard]
})
export class AdminModule { }
