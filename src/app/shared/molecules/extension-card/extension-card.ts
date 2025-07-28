import { Component, Input } from '@angular/core';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-extension-card',
  standalone: true,
  imports: [Button],
  templateUrl: './extension-card.html',
  styleUrl: './extension-card.css'
})

export class ExtensionCard {
  @Input() logo: string = '';
  @Input() browser: string = '';
  @Input() version: string = '';
  @Input() href: string = '#';
}

