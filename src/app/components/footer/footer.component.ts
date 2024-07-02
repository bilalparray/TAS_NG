import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  lastScrollPosition: number = 0;
  showFooter: boolean = true;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    /**
     * The current scroll position of the window.
     *
     * @type {number}
     */
    const currentScrollPosition = window.scrollY;

    /**
     * Determines whether the footer should be shown or hidden based on the scroll direction.
     * If the current scroll position is greater than the last scroll position, the footer is hidden.
     * Otherwise, the footer is shown.
     *
     * @type {boolean}
     */
    if (currentScrollPosition > this.lastScrollPosition) {
      this.showFooter = false;
    } else {
      this.showFooter = true;
    }

    /**
     * Updates the last scroll position with the current scroll position.
     *
     * @type {number}
     */
    this.lastScrollPosition = currentScrollPosition;
  }
}
