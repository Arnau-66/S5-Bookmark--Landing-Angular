import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabButton } from './tab-button';

describe('TabButton', () => {
  let component: TabButton;
  let fixture: ComponentFixture<TabButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label text', () => {
    component.label = 'Features';
    fixture.detectChanges();

    const span: HTMLSpanElement = fixture.nativeElement.querySelector('span');
    expect(span.textContent?.trim()).toBe('Features');
  });

  it('should not have active class by default', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('active')).toBeFalse();
  });

  it('should have active class when active is true', () => {
    component.active = true;
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('active')).toBeTrue();
  });

});
