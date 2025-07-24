import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint5-angular';
}

