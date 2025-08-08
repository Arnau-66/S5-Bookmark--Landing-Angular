import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputField } from './input-field';


describe('InputField', () => {
  let component: InputField;
  let fixture: ComponentFixture<InputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the placeholder', () => {
    component.placeholder = 'Enter your email';
    fixture.detectChanges();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('placeholder')).toBe('Enter your email');
  });

  it('should clear error on valid email after blur', async () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = 'valid@mail.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const errorEl: HTMLElement | null = fixture.nativeElement.querySelector('.input-error');
    expect(component.error).toBe('');
    expect(errorEl).toBeNull();
  });

  it('should show error on invalid email after blur', async () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = 'not-an-email';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const errorEl: HTMLElement | null = fixture.nativeElement.querySelector('.input-error');
    expect(component.error).toBe('Please enter a valid email address.');
    expect(errorEl?.textContent?.trim()).toBe('Please enter a valid email address.');
  });

});
