import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})

export class Navbar {

  isMenuOpen: boolean = false;

  private elementRef = inject(ElementRef);

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isMenuOpen = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    this.isMenuOpen = false;
  }

}


