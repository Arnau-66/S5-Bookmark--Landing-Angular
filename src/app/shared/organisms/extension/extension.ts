import { Component } from '@angular/core';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { ExtensionCard } from '../../molecules/extension-card/extension-card';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [FeaturesTitle, ExtensionCard],
  templateUrl: './extension.html',
  styleUrl: './extension.css'
})
export class Extension {

}
