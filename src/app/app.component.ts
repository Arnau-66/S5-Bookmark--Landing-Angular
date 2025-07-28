import { Component } from '@angular/core';
import { Navbar } from './shared/organisms/navbar/navbar';
import { Hero } from './shared/organisms/hero/hero';
import { Features } from './shared/organisms/features/features';
import { Extension } from './shared/organisms/extension/extension';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Features, Extension],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint5-angular';
}

