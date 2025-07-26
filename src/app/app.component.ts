import { Component } from '@angular/core';
import { Navbar } from './shared/organisms/navbar/navbar';
import { Hero } from './shared/organisms/hero/hero';


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

