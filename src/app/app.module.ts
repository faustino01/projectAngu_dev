import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGeneralComponent } from './list-general/list-general.component';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ListadoDevComponent } from './utilidades/listado-dev/listado-dev.component';


@NgModule({
  declarations: [
    AppComponent,
    ListGeneralComponent,
    MenuComponent,
    UsersComponent,
    PeliculasComponent,
    ListadoDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
