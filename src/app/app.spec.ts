import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

import { Navbar } from './shared/organisms/navbar/navbar';
import { Hero } from './shared/organisms/hero/hero';
import { Features } from './shared/organisms/features/features';
import { Extension } from './shared/organisms/extension/extension';
import { Questions } from './shared/organisms/questions/questions';
import { Newsletter } from './shared/organisms/newsletter/newsletter';
import { Footer } from './shared/organisms/footer/footer';


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('A Simple Bookmark Manager');
  });

  it('should render all top-level organisms', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(Navbar))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Hero))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Features))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Extension))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Questions))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Newsletter))).toBeTruthy();
    expect(fixture.debugElement.query(By.directive(Footer))).toBeTruthy();
  });

  it('should render exactly one of each organism', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.directive(Navbar)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Hero)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Features)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Extension)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Questions)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Newsletter)).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.directive(Footer)).length).toBe(1);
  });

});
