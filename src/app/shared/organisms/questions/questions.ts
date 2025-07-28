import { Component } from '@angular/core';
import { FeaturesTitle } from '../../molecules/features-title/features-title';
import { QuestionItem } from '../../molecules/question-item/question-item';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [FeaturesTitle, QuestionItem, Button],
  templateUrl: './questions.html',
  styleUrl: './questions.css'
})
export class Questions {

}
