import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesPanel } from './features-panel';
import { By } from '@angular/platform-browser';
import { Button } from '../../atoms/button/button';


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

  it('should render background and illustration images with correct src', () => {
    component.backgroundImage = 'assets/bg-test.svg';
    component.illustration = 'assets/illustration-test.svg';
    fixture.detectChanges();

    const images: HTMLImageElement[] = fixture.nativeElement.querySelectorAll('img');
    expect(images[0].src).toContain('assets/bg-test.svg');
    expect(images[0].alt).toBe('Decoration');

    expect(images[1].src).toContain('assets/illustration-test.svg');
    expect(images[1].alt).toBe('Illustration');
  });

  it('should render the title text', () => {
    component.title = 'Simple Bookmarking';
    fixture.detectChanges();

    const titleEl: HTMLElement = fixture.nativeElement.querySelector('.main-text-titles');
    expect(titleEl.textContent?.trim()).toBe('Simple Bookmarking');
  });

  it('should render the description text', () => {
    component.description = 'Organize your bookmarks efficiently';
    fixture.detectChanges();

    const descEl: HTMLElement = fixture.nativeElement.querySelector('.main-text');
    expect(descEl.textContent?.trim()).toBe('Organize your bookmarks efficiently');
  });

  it('should pass buttonLabel to app-button', () => {
    component.buttonLabel = 'Learn More';
    fixture.detectChanges();

    const buttonDe = fixture.debugElement.query(By.directive(Button));
    const buttonInstance = buttonDe.componentInstance as Button;
    expect(buttonInstance.text).toBe('Learn More');
  });

});
