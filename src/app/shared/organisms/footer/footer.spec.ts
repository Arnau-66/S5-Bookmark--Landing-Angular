import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo with correct src and alt', () => {
    const logo: HTMLImageElement = fixture.nativeElement.querySelector('.footer-logo');
    expect(logo).toBeTruthy();
    expect(logo.src).toContain('assets/img/Bookmark-logo-negative-no-background.png');
    expect(logo.alt).toBe('Logo');
  });

  it('should render nav links with correct labels and hrefs', () => {
    const links: HTMLAnchorElement[] =
      Array.from(fixture.nativeElement.querySelectorAll('.footer-links a'));

    const labels = links.map(a => a.textContent?.trim());
    const hrefs = links.map(a => a.getAttribute('href'));

    expect(labels).toEqual(['Features', 'Pricing', 'Contact']);
    expect(hrefs).toEqual(['#!', '#!', '#!']);
  });

  it('should render social icons with correct alts', () => {
    const socials: HTMLImageElement[] =
      Array.from(fixture.nativeElement.querySelectorAll('.footer-right img'));

    expect(socials.length).toBe(2);
    expect(socials[0].src).toContain('assets/img/icon-facebook.svg');
    expect(socials[0].alt).toBe('Facebook');
    expect(socials[1].src).toContain('assets/img/icon-twitter.svg');
    expect(socials[1].alt).toBe('Twitter');
  });

  it('should have left and right containers', () => {
    const left = fixture.nativeElement.querySelector('.footer-left');
    const right = fixture.nativeElement.querySelector('.footer-right');

    expect(left).toBeTruthy();
    expect(right).toBeTruthy();
  });

});
