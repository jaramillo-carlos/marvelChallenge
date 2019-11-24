import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SiteComponent],
  imports: [
    SharedModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
