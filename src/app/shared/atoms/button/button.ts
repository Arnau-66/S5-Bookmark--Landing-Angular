import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() text: string = 'Click me';
  @Input() href: string = '#';
  @Input() variant: 'chrome' | 'firefox' = 'chrome';
}
