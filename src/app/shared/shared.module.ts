import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ComicDialogComponent} from './utils/dialogs/comic-dialog/comic-dialog.component';
import {ProfileDialogComponent} from './utils/dialogs/profile-dialog/profile-dialog.component';

const COMPONENTS = [
  ComicDialogComponent,
  ProfileDialogComponent,
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
  ],
  entryComponents: [
    ComicDialogComponent,
    ProfileDialogComponent
  ]
})
export class SharedModule { }
