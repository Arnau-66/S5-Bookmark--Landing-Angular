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

  it('should render the title', () => {
    component.title = 'Bookmark in one click';
    fixture.detectChanges();

    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('.feature-title');
    expect(h2.textContent?.trim()).toBe('Bookmark in one click');
  });

  it('should render the text', () => {
    component.text = 'Organize your bookmarks efficiently';
    fixture.detectChanges();

    const p: HTMLElement = fixture.nativeElement.querySelector('.feature-text');
    expect(p.textContent?.trim()).toBe('Organize your bookmarks efficiently');
  });

});
