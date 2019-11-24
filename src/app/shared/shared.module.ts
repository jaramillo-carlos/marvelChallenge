import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './components/material.module';
import {NavbarComponent} from './components/navbar/navbar.component';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ],
  imports: [
    CommonModule,
    FlexLayoutModule,
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