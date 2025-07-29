import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputField {
  @Input() placeholder: string = ``;
}
