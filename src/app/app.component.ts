import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ListviewComponent } from './components/listview/listview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, SearchbarComponent, ListviewComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'infrrd_task';
  showSearchBlock: boolean = false
  searchedData: any

  showSerchLayout() {
    this.showSearchBlock = !this.showSearchBlock
  }

  searchData(event: any) {
    this.searchedData = event
    if (this.searchedData?.isClear) {
      this.showSearchBlock = false
    }
  }
}
