import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
