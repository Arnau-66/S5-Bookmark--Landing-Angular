import { Component } from '@angular/core';
import { Navbar } from './shared/organisms/navbar/navbar';
import { Hero } from './shared/organisms/hero/hero';
import { Features } from './shared/organisms/features/features';
import { Extension } from './shared/organisms/extension/extension';
import { Questions } from './shared/organisms/questions/questions';
import { Newsletter } from './shared/organisms/newsletter/newsletter';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Features, Extension, Questions, Newsletter],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint5-angular';
}

