import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionItem } from './question-item';
import { By } from '@angular/platform-browser';


describe('QuestionItem', () => {
  let component: QuestionItem;
  let fixture: ComponentFixture<QuestionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the question text', () => {
    component.question = 'What is Bookmark?';
    fixture.detectChanges();

    const q: HTMLElement = fixture.nativeElement.querySelector('.question-text');
    expect(q.textContent?.trim()).toBe('What is Bookmark?');
  });

  it('should hide the answer initially', () => {
    component.answer = 'A simple bookmark manager';
    fixture.detectChanges();

    const answerEl = fixture.nativeElement.querySelector('.answer');
    expect(component.isOpen).toBeFalse();
    expect(answerEl).toBeNull();
  });

  it('should show the answer after first click', () => {
    component.question = 'Q';
    component.answer = 'A';
    fixture.detectChanges();

    const rootDe = fixture.debugElement.query(By.css('.question-item'));
    rootDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    const answerEl: HTMLElement = fixture.nativeElement.querySelector('.answer');
    expect(component.isOpen).toBeTrue();
    expect(answerEl.textContent?.trim()).toBe('A');
  });

  it('should hide the answer after second click (toggle)', () => {
    component.answer = 'A';
    fixture.detectChanges();

    const rootDe = fixture.debugElement.query(By.css('.question-item'));
    
    rootDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    rootDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isOpen).toBeFalse();
    const answerEl = fixture.nativeElement.querySelector('.answer');
    expect(answerEl).toBeNull();
  });

  it('should rotate arrow icon when open', () => {
    fixture.detectChanges();
    const arrowBefore: HTMLElement = fixture.nativeElement.querySelector('.arrow-icon');
    expect(arrowBefore.classList.contains('rotated')).toBeFalse();

    const rootDe = fixture.debugElement.query(By.css('.question-item'));
    rootDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    const arrowAfter: HTMLElement = fixture.nativeElement.querySelector('.arrow-icon');
    expect(arrowAfter.classList.contains('rotated')).toBeTrue();
  });

});
