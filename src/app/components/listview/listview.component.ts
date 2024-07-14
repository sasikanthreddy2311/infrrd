import { Component, Input } from '@angular/core';
import { UserlistService } from '../../services/userlist.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.scss'
})
export class ListviewComponent {
  constructor(private userlistService: UserlistService) {}
  @Input() showSearchBlock: any = ''
  userList: any[] = []
  imageMap: any = {}
  starFill: any = '<i class="bi bi-star-fill"></i>'
  starHalf: any = '<i class="bi bi-star-half"></i>'
  starEmpty: any = '<i class="bi bi-star"></i>'

  ngOnInit(): void {
    this.userList = this.userlistService.getUserList()
    this.imageMap = this.userlistService.getAllImageList()
    console.log(this.imageMap)
  }

  getStarByRating(rating: any) {
    let stars = '';
    let sanitizedHtml: SafeHtml = ''
    
    const fullStars = Math.floor(rating);
    const halfStar = (rating - fullStars) >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    stars += this.starFill.repeat(fullStars);
    stars += this.starHalf.repeat(halfStar);
    stars += this.starEmpty.repeat(emptyStars);

    sanitizedHtml = stars;
    
    return sanitizedHtml;
  }

}
