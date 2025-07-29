import { Component } from '@angular/core';
import { NewsletterForm } from '../../molecules/newsletter-form/newsletter-form';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [NewsletterForm],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css'
})
export class Newsletter {

}
