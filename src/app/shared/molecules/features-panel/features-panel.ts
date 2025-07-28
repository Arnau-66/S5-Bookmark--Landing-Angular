import { Component, Input } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-features-panel',
  standalone: true,
  imports: [Button],
  templateUrl: './features-panel.html',
  styleUrl: './features-panel.css'
})
export class FeaturesPanel {
@Input() backgroundImage: string = '';
@Input() illustration: string = '';
@Input() title: string = '';
@Input() description: string = '';
@Input() buttonLabel: string = 'More info';

}
