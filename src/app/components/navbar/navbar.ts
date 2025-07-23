import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
})
export class Navbar {
  isMenuOpen: boolean = false;

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }
}
