import { Component } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { Button } from '../../atoms/button/button';


@Component({
  selector: 'app-newsletter-form',
  imports: [InputField, Button],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.css'
})
export class NewsletterForm {

}
