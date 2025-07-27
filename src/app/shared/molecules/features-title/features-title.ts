import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features-title',
  standalone: true,
  imports: [],
  templateUrl: './features-title.html',
  styleUrl: './features-title.css'
})
export class FeaturesTitle {
  @Input() title: string = '';
  @Input() text: string = '';
}
