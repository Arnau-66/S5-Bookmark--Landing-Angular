import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsletterForm } from './newsletter-form';
import { By } from '@angular/platform-browser';
import { InputField } from '../../atoms/input-field/input-field';
import { Button } from '../../atoms/button/button';


describe('NewsletterForm', () => {
  let component: NewsletterForm;
  let fixture: ComponentFixture<NewsletterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render subtitle and title', () => {
    const subtitle: HTMLElement = fixture.nativeElement.querySelector('.newsletter-subtitle');
    const title: HTMLElement = fixture.nativeElement.querySelector('.newsletter-title');

    expect(subtitle.textContent?.trim()).toBe('35,000+ ALREADY JOINED');
    expect(title.textContent?.trim()).toBe(`Stay up-to-date with what we're doing`);
  });

  it('should render InputField with correct placeholder', () => {
    const inputFieldDe = fixture.debugElement.query(By.directive(InputField));
    const inputFieldInstance = inputFieldDe.componentInstance as InputField;

    expect(inputFieldInstance.placeholder).toBe('Enter your email address');
  });

  it('should render Button with correct text and variant', () => {
    const buttonDe = fixture.debugElement.query(By.directive(Button));
    const buttonInstance = buttonDe.componentInstance as Button;

    expect(buttonInstance.text).toBe('Contact Us');
    expect(buttonInstance.variant).toBe('firefox');
  });

});
