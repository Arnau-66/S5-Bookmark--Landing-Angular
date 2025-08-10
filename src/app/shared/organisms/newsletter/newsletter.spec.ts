import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Newsletter } from './newsletter';
import { By } from '@angular/platform-browser';
import { NewsletterForm } from '../../molecules/newsletter-form/newsletter-form';


describe('Newsletter', () => {
  let component: Newsletter;
  let fixture: ComponentFixture<Newsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the newsletter section container', () => {
    const section: HTMLElement | null = fixture.nativeElement.querySelector('.newsletter');
    expect(section).not.toBeNull();
  });

  it('should render a NewsletterForm child component', () => {
    const formDe = fixture.debugElement.query(By.directive(NewsletterForm));
    expect(formDe).toBeTruthy();
   
    const allForms = fixture.debugElement.queryAll(By.directive(NewsletterForm));
    expect(allForms.length).toBe(1);
  });

});
