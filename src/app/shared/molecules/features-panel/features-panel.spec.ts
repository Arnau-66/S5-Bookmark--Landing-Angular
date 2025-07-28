import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPanel } from './features-panel';

describe('FeaturesPanel', () => {
  let component: FeaturesPanel;
  let fixture: ComponentFixture<FeaturesPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
