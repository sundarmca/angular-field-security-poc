import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForminputService } from './forminput.service';
import { FieldInputsComponent } from './field-inputs/field-inputs.component';
import { InputComponent } from './input/input.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, FieldInputsComponent, InputComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ForminputService]
})
export class AppModule { }
