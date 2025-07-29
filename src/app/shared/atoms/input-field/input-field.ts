import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css'
})
export class InputField {
  @Input() placeholder: string = ``;

  value: string ='';
  error: string ='';

  validate(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(this.value)) {
      this.error = 'Please enter a valid email address.';

    } else {
      this.error = '';
    }
  }
}
