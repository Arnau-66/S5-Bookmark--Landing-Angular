import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,               // 👈 obligatorio en este tipo de estructura
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint5-angular';
}
