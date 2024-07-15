import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import this
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {
  @Output() onSearchSubmit: EventEmitter<any> = new EventEmitter();
  filterForm: FormGroup;
  keyMapList: any = {}

  constructor(private fb: FormBuilder, private userlistService: UserlistService) { 
    this.filterForm = this.fb.group({
      department: [''],
      roleType: [''],
      designation: [''],
      experience: [''],
      location: [''],
      team: ['']
    });
  }

  ngOnInit() {
    this.keyMapList = this.userlistService.userKeyMapList()
  }

  onSubmit() {
    console.log(this.filterForm.value); 
    this.onSearchSubmit.emit(this.filterForm.value)
  }

  clearForm() {
    this.filterForm.reset()
    this.filterForm.value.isClear = true
    this.onSearchSubmit.emit(this.filterForm.value)
  }

}
