import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pub2Component } from './pub2.component';

describe('Pub2Component', () => {
  let component: Pub2Component;
  let fixture: ComponentFixture<Pub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
