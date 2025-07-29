import { Component } from '@angular/core';
import { InputField } from '../../atoms/input-field/input-field';
import { Button } from '../../atoms/button/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [InputField, Button, FormsModule],
  templateUrl: './newsletter-form.html',
  styleUrl: './newsletter-form.css'
})
export class NewsletterForm {

}
