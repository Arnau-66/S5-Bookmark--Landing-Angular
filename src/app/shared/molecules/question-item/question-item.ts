import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-item',
  imports: [],
  templateUrl: './question-item.html',
  styleUrl: './question-item.css'
})
export class QuestionItem {
  @Input() question: string = '';
}
