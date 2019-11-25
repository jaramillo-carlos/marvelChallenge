import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContainer } from './characters.container';

describe('CharactersContainer', () => {
  let component: CharactersContainer;
  let fixture: ComponentFixture<CharactersContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
