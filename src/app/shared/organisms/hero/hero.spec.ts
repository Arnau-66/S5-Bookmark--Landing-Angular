import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { By } from '@angular/platform-browser';
import { Button } from '../../atoms/button/button';


describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero title and paragraph', () => {
    const h1: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    const p: HTMLElement = fixture.nativeElement.querySelector('.main-text');

    expect(h1.textContent?.trim()).toBe('A Simple Bookmark Manager');
    expect(p.textContent?.trim()).toBe('A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.'
    );
  });

  it('should render two app-button components with correct inputs', () => {
    const buttonsDe = fixture.debugElement.queryAll(By.directive(Button));
    expect(buttonsDe.length).toBe(2);

    const btn1 = buttonsDe[0].componentInstance as Button;
    const btn2 = buttonsDe[1].componentInstance as Button;

    expect(btn1.text).toBe('Get it on Chrome');
    expect(btn1.href).toBe('#');
    expect(btn1.variant).toBe('chrome');

    expect(btn2.text).toBe('Get it on Firefox');
    expect(btn2.href).toBe('#');
    expect(btn2.variant).toBe('firefox');
  });

  it('should render background shape and illustration with correct src/alt', () => {
    const shape: HTMLImageElement = fixture.nativeElement.querySelector('.hero-shape');
    const ill: HTMLImageElement = fixture.nativeElement.querySelector('.hero-illustration');

    expect(shape.src).toContain('assets/img/rectangulo-aliceblue.png');
    expect(shape.alt).toBe('Decoration');

    expect(ill.src).toContain('assets/img/illustration-hero.svg');
    expect(ill.alt).toBe('Illustration');
  });

  it('should have hero-text, hero-buttons and hero-image containers', () => {
    expect(fixture.nativeElement.querySelector('.hero-text')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.hero-buttons')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.hero-image')).toBeTruthy();
  });

});
