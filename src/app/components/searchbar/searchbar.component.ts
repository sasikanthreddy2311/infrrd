import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import this

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
  departmentList: string[] = []
  roleTypeList: string[] = []
  designationList: string[] = []
  experienceList: any[] = []
  locationList: string[] = []
  teamList: string[] = []

  constructor(private fb: FormBuilder) { 
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
    this.departmentList = ['Front End Development', 'Back End Development', 'Quality Assurance', 'Operations', 'Project Management', 'Human Resources'];
    this.roleTypeList = ['Full Time', 'Part Time', 'Contract']
    this.designationList = ['Fresher', 'Junior Developer', 'Senior Developer', 'Manager']
    this.experienceList = [{
      name: '3 Years above',
      value: '3'
    }, {
      name: '5 Years above',
      value: '5'
    }, {
      name: '7 Years above',
      value: '7'
    }, {
      name: '10 Years above',
      value: '10'
    }]
    this.locationList = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai']
    this.teamList = ['OCBC Singapore', 'IND India', 'EMEA Germany']
  }

  onSubmit() {
    console.log(this.filterForm.value); 
    this.onSearchSubmit.emit(this.filterForm.value)
  }

  clearForm() {
    this.filterForm.reset()
    this.onSearchSubmit.emit(this.filterForm.value)
  }

}
