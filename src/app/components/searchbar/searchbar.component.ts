import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  filterForm: FormGroup;
  departmentList: string[] = []
  roleTypeList: string[] = []
  designationList: string[] = []
  experienceList: string[] = []
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
    this.roleTypeList = ['Full Type', 'Part Time', 'Contract']
    this.designationList = ['Fresher', 'Junior Developer', 'Senior Developer', 'Manager']
    this.experienceList = ['3 Years above', '5 Years above', '7 Years above', '10 Years above']
    this.locationList = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai']
    this.teamList = ['OCBC Singapore', 'IND India', 'EMEA Germany']
  }

  onSubmit() {
    console.log(this.filterForm.value); // Access filtered data here
    // Handle form submission logic (e.g., filter data, send to server)
  }

}
