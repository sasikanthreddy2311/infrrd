import { Component, EventEmitter, Output } from '@angular/core';
import { UserlistService } from '../../services/userlist.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.scss'
})
export class CreateuserComponent {
  constructor(private userlistService: UserlistService, private fb: FormBuilder) {}

  @Output() closeModalEvent: EventEmitter<any> = new EventEmitter();
  @Output() createUserEvent: EventEmitter<any> = new EventEmitter();
  imageMap: any;
  userForm!: FormGroup;
  ratingValues: any[] = [2, 2.5, 3, 3.5, 4, 4.5, 5];
  keyMapList: any = {}
  showMsg: boolean = false

  ngOnInit(): void {
    this.imageMap = this.userlistService.getAllImageList()
    this.keyMapList = this.userlistService.userKeyMapList()
    this.initilizeForm()
  }

  initilizeForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      rating: ['', [Validators.required]],
      doj: ['', [Validators.required]],
      reporting: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      roleType: ['',  [Validators.required]],
      designation: ['',  [Validators.required]],
      experience: ['', [Validators.required]],
      location: ['', [Validators.required]],
      team: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  closeModal() {
    this.closeModalEvent.emit()
  }

  onUserSubmit() {
    console.log(this.userForm.value);
    this.createUserEvent.emit(this.userForm.value)
    this.showMsg = true
    this.resetForm()
  }

  resetForm() {
    setTimeout(() => {
      this.closeModalEvent.emit()
    }, 3000);
  }


  getYearValues() {
    const startYear = 2000;
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }

    return years
  }

}
