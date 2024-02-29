import {
  Component,
  ElementRef,
  Inject,
  HostListener,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  // functin to close navbar when clicking on any nav linkl
  closeNavbar() {
    const navbarToggler =
      this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse =
      this.el.nativeElement.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      // Check if the navbar is expanded (not collapsed)
      const isExpanded = !navbarToggler.classList.contains('collapsed');

      if (isExpanded) {
        // Close the navbar
        this.renderer.addClass(navbarToggler, 'collapsed');
        this.renderer.removeClass(navbarCollapse, 'show');
      }
    }
  }
  // adding class of fixed top when scrool to navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.querySelector('.navbar') as HTMLElement;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  }
}
