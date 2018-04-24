import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormTestDrivenComponent } from './formulario/validacao/form-test-driven/form-test-driven.component';
import { PorHtmlComponent } from './formulario/validacao/form-test-driven/por-html/por-html.component';
import { ReactiveFormComponent } from './formulario/validacao/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTestDrivenComponent,
    PorHtmlComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
