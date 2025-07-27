import { Component } from '@angular/core';
import { TabButton } from '../../atoms/tab-button/tab-button';
import { Button } from '../../atoms/button/button';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [Component, TabButton, Button],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {

}
