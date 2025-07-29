import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-item',
  standalone: true,
  imports: [],
  templateUrl: './question-item.html',
  styleUrl: './question-item.css'
})
export class QuestionItem {
  @Input() question: string = '';
  @Input() answer: string = '';

  isOpen: boolean = false;

    toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
