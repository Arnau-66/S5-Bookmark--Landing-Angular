import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Questions } from './questions';
import { By } from '@angular/platform-browser';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { QuestionItem } from '../../molecules/question-item/question-item';
import { Button } from '../../atoms/button/button';


describe('Questions', () => {
  let component: Questions;
  let fixture: ComponentFixture<Questions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main containers', () => {
    expect(fixture.nativeElement.querySelector('.questions')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.questions-list')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.questions-btn-container')).toBeTruthy();
  });

  it('should render FeaturesTitle with the correct inputs', () => {
    const ftDe = fixture.debugElement.query(By.directive(FeaturesTitle));
    const ft = ftDe.componentInstance as FeaturesTitle;

    expect(ft.title).toBe('Frequently Asked Questions');
    expect(ft.text).toBe(`Here are some of our FAQs. If you'd like answered please feel free to email us.`);
  });

  it('should render exactly four QuestionItem components', () => {
    const itemsDe = fixture.debugElement.queryAll(By.directive(QuestionItem));
    expect(itemsDe.length).toBe(4);
  });

  it('should pass the correct question/answer inputs to each QuestionItem', () => {
    const itemsDe = fixture.debugElement.queryAll(By.directive(QuestionItem));
    const expected = [
      {
        q: 'What is Bookmark?',
        a: 'Bookmark is a tool that allows you to save and organize your favorite websites so you can access them quickly and easily later on.'
      },
      {
        q: 'How can I request a new browser?',
        a: `You can request a new browser by contacting our support team. We're constantly expanding and appreciate feedback from our users.`
      },
      {
        q: 'Is there a mobile app?',
        a: 'Currently, we are working on mobile applications. In the meantime, you can use the web version from your mobile browser without issues.'
      },
      {
        q: 'What about other Chromium browsers?',
        a: `We support the most popular Chromium-based browsers, and we’re always adding more. Let us know which one you'd like us to support next.`
      }
    ];

    itemsDe.forEach((de, i) => {
      const item = de.componentInstance as QuestionItem;
      expect(item.question).toBe(expected[i].q);
      expect(item.answer).toBe(expected[i].a);
    });
  });

  it('should have all QuestionItem closed by default (isOpen = false)', () => {
    const itemsDe = fixture.debugElement.queryAll(By.directive(QuestionItem));
    itemsDe.forEach(de => {
      const item = de.componentInstance as QuestionItem;
      expect(item.isOpen).toBeFalse();
    });
  });

  it('should render the More Info button with correct text and variant', () => {
    const btnDe = fixture.debugElement.query(By.directive(Button));
    const btn = btnDe.componentInstance as Button;
    expect(btn.text).toBe('More Info');
    expect(btn.variant).toBe('chrome');
  });

});
