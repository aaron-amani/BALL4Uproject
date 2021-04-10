import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSuivantComponent } from './match-suivant.component';

describe('MatchSuivantComponent', () => {
  let component: MatchSuivantComponent;
  let fixture: ComponentFixture<MatchSuivantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSuivantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
