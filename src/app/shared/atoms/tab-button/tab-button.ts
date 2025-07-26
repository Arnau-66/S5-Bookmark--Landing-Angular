import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  standalone: true,
  imports: [],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.css'
})
export class TabButton {
  @Input() label: string = 'Tab';
  @Input() active: boolean = false;
}
