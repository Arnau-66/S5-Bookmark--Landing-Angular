import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';
import { By } from '@angular/platform-browser';
import { Button } from '../../atoms/button/button';


describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render desktop links with correct labels and hrefs', () => {
    const links: HTMLAnchorElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.navbar-links > a')
    );

    const labels = links.map(a => a.textContent?.trim());
    const hrefs = links.map(a => a.getAttribute('href'));

    expect(labels).toEqual(['Features', 'Pricing', 'Contact']);
    expect(hrefs).toEqual(['#', '#', '#']);
  });

  it('should render an app-button for LOGIN with variant login-button', () => {
    const btnDe = fixture.debugElement.query(By.directive(Button));
    const btn = btnDe.componentInstance as Button;

    expect(btn.text).toBe('LOGIN');
    expect(btn.href).toBe('#');
    expect(btn.variant).toBe('login-button');
  });

  it('should toggle mobile menu when hamburger is clicked', () => {
    const hamburger = fixture.debugElement.query(By.css('.hamburger-menu'));

    expect(component.isMenuOpen).toBeFalse();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).toBeNull();

    hamburger.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isMenuOpen).toBeTrue();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).not.toBeNull();

    hamburger.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.isMenuOpen).toBeFalse();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).toBeNull();
  });

  it('should close mobile menu when clicking outside the navbar', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).not.toBeNull();

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeFalse();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).toBeNull();
  });

  it('should keep mobile menu open when clicking inside the navbar', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const insideEl = fixture.nativeElement.querySelector('.navbar-links');
    insideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeTrue();
    expect(fixture.nativeElement.querySelector('.navbar-links-mobile')).not.toBeNull();
  });

  it('should close mobile menu on window scroll', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close mobile menu on Escape key press', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const evt = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(evt);
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeFalse();
  });

});
