import { Component } from '@angular/core';
import { TabButton } from '../../atoms/tab-button/tab-button';
import { Button } from '../../atoms/button/button';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { FeaturesPanel } from '../../molecules/features-panel/features-panel';

type TabKey = 'Simple Bookmarking' | 'Speedy Searching' | 'Easy Sharing';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ TabButton, Button, FeaturesTitle, FeaturesPanel],
  templateUrl: './features.html',
  styleUrl: './features.css'
})



export class Features {
  activeTab: TabKey = 'Simple Bookmarking';

  tabsContent: Record<TabKey, {
    illustration: string;
    title: string;
    description: string;
  }> = {
    'Simple Bookmarking': {
      illustration: 'assets/img/illustration-features-tab-1.svg',
      title: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    'Speedy Searching': {
      illustration: 'assets/img/illustration-features-tab-2.svg',
      title: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    'Easy Sharing': {
      illustration: 'assets/img/illustration-features-tab-3.svg',
      title: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  };

  setActiveTab(tab: TabKey) {
    this.activeTab = tab;
  }
}


