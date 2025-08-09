import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Extension } from './extension';
import { By } from '@angular/platform-browser';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { ExtensionCard } from '../../molecules/extension-card/extension-card';


describe('Extension', () => {
  let component: Extension;
  let fixture: ComponentFixture<Extension>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extension]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extension);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render FeaturesTitle with correct inputs', () => {
    const ftDe = fixture.debugElement.query(By.directive(FeaturesTitle));
    const ftInstance = ftDe.componentInstance as FeaturesTitle;

    expect(ftInstance.title).toBe('Download the extension');
    expect(ftInstance.text).toBe(`We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.`
    );
  });

  it('should render three ExtensionCard components', () => {
    const cardsDe = fixture.debugElement.queryAll(By.directive(ExtensionCard));
    expect(cardsDe.length).toBe(3);
  });

  it('should pass correct inputs to each ExtensionCard', () => {
    const cardsDe = fixture.debugElement.queryAll(By.directive(ExtensionCard));

    const expectedData = [
      { logo: 'assets/img/logo-chrome.svg', browser: 'Chrome', version: '62', href: '#!' },
      { logo: 'assets/img/logo-firefox.svg', browser: 'Firefox', version: '55', href: '#!' },
      { logo: 'assets/img/logo-opera.svg', browser: 'Opera', version: '46', href: '#!' }
    ];

    cardsDe.forEach((cardDe, index) => {
      const instance = cardDe.componentInstance as ExtensionCard;
      expect(instance.logo).toBe(expectedData[index].logo);
      expect(instance.browser).toBe(expectedData[index].browser);
      expect(instance.version).toBe(expectedData[index].version);
      expect(instance.href).toBe(expectedData[index].href);
    });
  });

});
