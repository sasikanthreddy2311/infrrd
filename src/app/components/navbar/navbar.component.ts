import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navList: any = [{
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
