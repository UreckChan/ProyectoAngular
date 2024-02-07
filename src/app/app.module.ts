import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaCalificacionesComponent } from './pages/alta-calificaciones/alta-calificaciones.component';
import { ListaCalificacionesComponent } from './pages/lista-calificaciones/lista-calificaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AltaCalificacionesComponent,
    ListaCalificacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
