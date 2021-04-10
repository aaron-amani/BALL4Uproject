import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierScoreComponent } from './dernier-score.component';

describe('DernierScoreComponent', () => {
  let component: DernierScoreComponent;
  let fixture: ComponentFixture<DernierScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernierScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DernierScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
