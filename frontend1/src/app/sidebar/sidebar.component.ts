import { Component, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSmallScreen = true;
  activeLink: string = '';

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Navigation ended, hide the sidebar here
        this.hideSidebar();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = window.innerWidth <= 1199.98;
    this.hideSidebar();
  }
  setActiveLink(): void {
    // Extract the active link from the router's URL
    const urlTree = this.router.parseUrl(this.router.url);
    const segments = urlTree.root.children['primary'].segments;
    const path = segments.map(segment => segment.path).join('/');
    
    
    // Set the active link
    this.activeLink = path;
  }


  hideSidebar(): void {
    // Hide the sidebar when a link is clicked
    if (this.isSmallScreen) {
      const sidebar = this.el.nativeElement.querySelector('.sidebar');
      this.renderer.addClass(sidebar, 'hidden');
      this.setActiveLink();
    }
  }
}
