import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UserlistService } from '../../services/userlist.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CreateuserComponent } from '../createuser/createuser.component';

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [CommonModule, CreateuserComponent],
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.scss'
})
export class ListviewComponent {
  constructor(private userlistService: UserlistService) {}
  @Input() showSearchBlock: any = '';
  @Input() searchedData: any;
  userList: any[] = []
  imageMap: any = {}
  starFill: any = '<i class="bi bi-star-fill"></i>'
  starHalf: any = '<i class="bi bi-star-half"></i>'
  starEmpty: any = '<i class="bi bi-star"></i>'
  filteredList: any[] = []
  showCreateBlock: boolean = false;
  maxSize: number = 15;
  editUserData: any

  ngOnInit(): void {
    this.userList = this.userlistService.getUserList()
    this.imageMap = this.userlistService.getAllImageList()
    this.filteredList = this.userList
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchedData']) {
      let data = changes['searchedData'].currentValue
      this.filteredList = this.userList.filter(item => {
        return (!data.department || item.department === data.department) &&
               (!data.designation || item.designation === data.designation) &&
               (!data.experience || item.experience >= Number(data.experience)) &&
               (!data.location || item.location === data.location) &&
               (!data.roleType || item.roleType === data.roleType) &&
               (!data.team || item.team === data.team)
      });  
    }
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

  showCreateLayout() {
    this.editUserData = null
    this.showCreateBlock = true;
  }

  closeModal() {
    this.editUserData = null
    this.showCreateBlock = false;
  }

  createNewUser(event: any) {
    this.userList.push({ ...event })
    this.filteredList = this.userList
  }

  updateUser(event: any) {
    this.userList[event.id] = event.data
    this.filteredList = this.userList
  }

  truncateEmail(email: string) {
    if (email.length <= this.maxSize) {
      return email;
    } else {
      const truncatedEmail = email.substring(0, this.maxSize) + '...';
      return truncatedEmail;
    }
  }

  showConfirmationModal(user: any, index: number) {
    this.userList.forEach(user => {
      user.showConfirmation = false
    })
    user.showConfirmation = true
    this.userList[index] = user
    this.filteredList = this.userList
  }

  onYes(index: number) {
    this.userList.splice(index, 1)
    this.filteredList = this.userList
  }

  onNo() {
    this.userList.forEach(user => {
      user.showConfirmation = false
    })
    this.filteredList = this.userList
  }

  editUser(user: any, index: number) {
    user.id = index
    this.editUserData = user
    this.showCreateBlock = true;
  }

}
