import { NgModule } from '@angular/core';
import {LoaderComponent} from './layouts/loader/loader.component';
import {NotFoundComponent} from './layouts/not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
