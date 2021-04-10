import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierMatchComponent } from './calendrier-match.component';

describe('CalendrierMatchComponent', () => {
  let component: CalendrierMatchComponent;
  let fixture: ComponentFixture<CalendrierMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
