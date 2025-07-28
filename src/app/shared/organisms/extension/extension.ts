import { Component } from '@angular/core';
import { FeaturesTitle } from '../../molecules/features-title/features-title';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [FeaturesTitle],
  templateUrl: './extension.html',
  styleUrl: './extension.css'
})
export class Extension {

}
