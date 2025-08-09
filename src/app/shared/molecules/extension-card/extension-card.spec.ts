import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtensionCard } from './extension-card';
import { By } from '@angular/platform-browser';
import { Button } from '../../atoms/button/button';

describe('ExtensionCard', () => {
  let component: ExtensionCard;
  let fixture: ComponentFixture<ExtensionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo with correct src and alt', () => {
    component.logo = 'assets/img/logo-chrome.svg';
    component.browser = 'Chrome';
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img.card-logo');
    expect(img.src).toContain('assets/img/logo-chrome.svg');
    expect(img.alt).toBe('Chrome logo');
  });

  it('should render browser title', () => {
    component.browser = 'Firefox';
    fixture.detectChanges();

    const h3: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent?.trim()).toBe('Add to Firefox');
  });

  it('should render minimum version text', () => {
    component.version = '55';
    fixture.detectChanges();

    const p: HTMLElement = fixture.nativeElement.querySelector('.version');
    expect(p.textContent?.trim()).toBe('Minimum version 55');
  });

  it('should pass href and text to app-button', () => {
    component.href = 'https://example.com/install';
    fixture.detectChanges();

    const buttonDe = fixture.debugElement.query(By.directive(Button));
    const buttonInstance = buttonDe.componentInstance as Button;

    expect(buttonInstance.href).toBe('https://example.com/install');
    expect(buttonInstance.text).toBe('Add & Install Extension'); // definido en el template del padre
  });

});
