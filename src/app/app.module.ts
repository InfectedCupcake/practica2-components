import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MenuComponent } from './menu/menu.component';
import { TareaFormularioComponent } from './tarea-formulario/tarea-formulario.component';
import { TareaCardComponent } from './tarea-card/tarea-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    MenuComponent,
    TareaFormularioComponent,
    TareaCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
