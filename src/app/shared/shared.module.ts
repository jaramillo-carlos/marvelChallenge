import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './components/material.module';

const COMPONENTS = [

];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ...COMPONENTS
  ]
})
export class SharedModule { }
