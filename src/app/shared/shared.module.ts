import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
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
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
