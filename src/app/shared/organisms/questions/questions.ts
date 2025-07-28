import { Component } from '@angular/core';
import { FeaturesTitle } from '../../molecules/features-title/features-title';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [FeaturesTitle],
  templateUrl: './questions.html',
  styleUrl: './questions.css'
})
export class Questions {

}
