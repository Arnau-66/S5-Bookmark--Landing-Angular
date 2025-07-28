import { Component } from '@angular/core';
import { TabButton } from '../../atoms/tab-button/tab-button';
import { Button } from '../../atoms/button/button';
import { FeaturesTitle } from '../../molecules/features-title/features-title';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ TabButton, Button, FeaturesTitle],
  templateUrl: './features.html',
  styleUrl: './features.css'
})

export class Features {
  activeTab: string = 'Simple Bookmarking';

  setActiveTab(tabLabel: string): void {
    this.activeTab = tabLabel;
  }
}
