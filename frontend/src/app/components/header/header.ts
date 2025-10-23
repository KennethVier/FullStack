import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Button } from "../../shared/button/button";

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech-stacks', label: 'Tech Stacks' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown?.classList.toggle('hidden');
  }

  toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
  }

  constructor(private router: Router, private scroller: ViewportScroller) {}

  scrollTo(sectionId: string) {
    if (this.router.url.startsWith('/portfolio')) {
      console.log('Scrolling to section:', sectionId);
      this.scroller.scrollToAnchor(sectionId);
    } else {
      this.router.navigate(['/portfolio'], { fragment: sectionId });
    }
  }
}
