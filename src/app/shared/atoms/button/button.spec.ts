import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';
import { By } from '@angular/platform-browser';


describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input text', () => {
    component.text = 'CLICK ME';
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.textContent?.trim()).toBe('CLICK ME');
  });

  it('should set the correct href', () => {
    component.href = '/test-link';
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.getAttribute('href')).toBe('/test-link');
  });

  it('should apply the variant class', () => {
    component.variant = 'firefox';
    fixture.detectChanges();
    const linkDe = fixture.debugElement.query(By.css('a'));
    expect(linkDe.classes['firefox']).toBeTrue();
  });



});
