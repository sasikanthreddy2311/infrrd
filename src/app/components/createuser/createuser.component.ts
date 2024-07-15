import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Output() updateUserEvent: EventEmitter<any> = new EventEmitter();
  @Input() editUserData: any
  imageMap: any;
  userForm!: FormGroup;
  ratingValues: any[] = [2, 2.5, 3, 3.5, 4, 4.5, 5];
  keyMapList: any = {}
  showMsg: boolean = false
  showMsgText: string = ''

  ngOnInit(): void {
    this.imageMap = this.userlistService.getAllImageList()
    this.keyMapList = this.userlistService.userKeyMapList()
    if (!this.editUserData) {
      this.initilizeForm(null)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editUserData'].currentValue) {
      let data = changes['editUserData'].currentValue
      this.initilizeForm(data)
    }
  }

  initilizeForm(data: any) {
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

    if (data) {
      const experience = Math.floor(data.experience)
      this.userForm.patchValue({ ...data, experience })
    }
  }

  closeModal() {
    this.closeModalEvent.emit()
  }

  onUserSubmit() {
    if (this.editUserData?.id) {
      this.updateUserEvent.emit({ data: this.userForm.value, id: this.editUserData.id })
      this.showMsg = true
      this.showMsgText = 'User updated successfully.'
      this.resetForm()
    } else {
      this.createUserEvent.emit(this.userForm.value)
      this.showMsg = true
      this.showMsgText = 'User created successfully.'
      this.resetForm()
    }
  
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
