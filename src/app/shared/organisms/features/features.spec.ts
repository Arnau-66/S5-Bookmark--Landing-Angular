import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Features } from './features';
import { By } from '@angular/platform-browser';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { TabButton } from '../../atoms/tab-button/tab-button';
import { FeaturesPanel } from '../../molecules/features-panel/features-panel';


describe('Features', () => {
  let component: Features;
  let fixture: ComponentFixture<Features>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render FeaturesTitle with correct inputs', () => {
    const ftDe = fixture.debugElement.query(By.directive(FeaturesTitle));
    const ftInstance = ftDe.componentInstance as FeaturesTitle;

    expect(ftInstance.title).toBe('Features');
    expect(ftInstance.text).toBe(
      'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.'
    );
  });

  it('should render three TabButton components', () => {
    const tabButtonsDe = fixture.debugElement.queryAll(By.directive(TabButton));
    expect(tabButtonsDe.length).toBe(3);
  });

  it('should set first tab as active by default', () => {
    const tabButtonsDe = fixture.debugElement.queryAll(By.directive(TabButton));
    const firstTab = tabButtonsDe[0].componentInstance as TabButton;

    expect(firstTab.active).toBeTrue();
    expect(component.activeTab).toBe('Simple Bookmarking');
  });

  it('should change activeTab and update FeaturesPanel when clicking another tab', () => {
    const tabButtonsDe = fixture.debugElement.queryAll(By.directive(TabButton));
    
    
    tabButtonsDe[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.activeTab).toBe('Speedy Searching');

    const panelDe = fixture.debugElement.query(By.directive(FeaturesPanel));
    const panelInstance = panelDe.componentInstance as FeaturesPanel;
    expect(panelInstance.title).toBe('Intelligent search');
    expect(panelInstance.description).toBe(
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    );
  });

  it('should pass fixed backgroundImage to FeaturesPanel', () => {
    const panelDe = fixture.debugElement.query(By.directive(FeaturesPanel));
    const panelInstance = panelDe.componentInstance as FeaturesPanel;

    expect(panelInstance.backgroundImage).toBe('assets/img/rectangulo-aliceblue.png');
  });

});
