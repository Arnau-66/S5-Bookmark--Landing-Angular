import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint5-angular';
}
