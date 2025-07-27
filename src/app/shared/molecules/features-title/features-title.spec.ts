import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTitle } from './features-title';

describe('FeaturesTitle', () => {
  let component: FeaturesTitle;
  let fixture: ComponentFixture<FeaturesTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
