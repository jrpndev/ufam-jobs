import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDescriptionComponent } from './ads-description.component';

describe('AdsDescriptionComponent', () => {
  let component: AdsDescriptionComponent;
  let fixture: ComponentFixture<AdsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
