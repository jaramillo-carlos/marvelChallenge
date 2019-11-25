import {NgModule} from '@angular/core';

import {SiteRoutingModule} from './site-routing.module';
import {SiteComponent} from './site.component';
import {SharedModule} from '../shared/shared.module';
import {CharactersContainer} from './characters/characters.container';
import { CharacterComponent } from './characters/character/character.component';


@NgModule({
  declarations: [
    SiteComponent,
    CharactersContainer,
    CharacterComponent
  ],
  imports: [
    SharedModule,
    SiteRoutingModule
  ]
})
export class SiteModule {
}
