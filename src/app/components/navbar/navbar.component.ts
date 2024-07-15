import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navList: any = []
  @Output() onSearchLayoutClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.navList = [{
      name: 'Overview',
      iconClass: 'bi bi-view-stacked'
    },
    {
      name: 'Messages',
      iconClass: 'bi bi-envelope'
    },
    {
      name: 'Search',
      iconClass: 'bi bi-search'
    },
    {
      name: 'Filter',
      iconClass: 'bi bi-filter-circle'
    },
    {
      name: 'History',
      iconClass: 'bi bi-clock-history'
    },
    {
      name: 'My Account',
      iconClass: 'bi bi-person-fill'
    }]
  }

  onLinkClick(link: any) {
    if (link === 'Search') {
      this.onSearchLayoutClick.emit()
    }
  }
}
