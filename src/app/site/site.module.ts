import {NgModule} from '@angular/core';

import {SiteRoutingModule} from './site-routing.module';
import {SiteComponent} from './site.component';
import {SharedModule} from '../shared/shared.module';
import {CharactersContainer} from './characters/characters.container';
import { CharacterComponent } from './characters/character/character.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    SiteComponent,
    CharactersContainer,
    CharacterComponent
  ],
  imports: [
    SharedModule,
    SiteRoutingModule,
    NgxPaginationModule
  ]
})
export class SiteModule {
}
