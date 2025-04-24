import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeDropdown: string | null = null;
  menuOpen: boolean = false;

  toggleDropdown(section: string) {
    this.activeDropdown = this.activeDropdown === section ? null : section;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
