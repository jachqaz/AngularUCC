import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CursosComponent} from './cursos/cursos.component';
import {FormsModule} from '@angular/forms';
import {CalculadoraComponent} from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
