import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownBaniereComponent } from './down-baniere.component';

describe('DownBaniereComponent', () => {
  let component: DownBaniereComponent;
  let fixture: ComponentFixture<DownBaniereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownBaniereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownBaniereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
