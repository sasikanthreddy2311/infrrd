import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor() { }

  getUserList() {
    return [
      { name: 'Andrew Bridgen', rating: '3.5', doj: '2020', reporting: 'Lalit Agarwal', mobile: '8766986785', email: 'test@infrrd.ai', department: 'Front End Development', roleType: 'Full Time', designation: 'Fresher', experience: '3.5', location: 'Bangalore', team: 'OCBC Singapore', image: 'man' },
      { name: 'John Doe', rating: '5', doj: '2022', reporting: 'Lalit Agarwal', mobile: '8766986885', email: 'test@infrrd.ai', department: 'Back End Development', roleType: 'Part Time', designation: 'Junior Developer', experience: '5', location: 'Hyderabad', team: 'IND India', image: 'man1' },
      { name: 'Sasikanth Reddy', rating: '4.5', doj: '2016', reporting: 'Lalit Agarwal', mobile: '9766986885', email: 'test@infrrd.ai', department: 'Quality Assurance', roleType: 'Contract', designation: 'Senior Developer', experience: '7.5', location: 'Chennai', team: 'EMEA Germany', image: 'profile' },
      { name: 'Jane Smith', rating: '3', doj: '2024', reporting: 'Lalit Agarwal', mobile: '9866986885', email: 'test@infrrd.ai', department: 'Operations', roleType: 'Full Time', designation: 'Manager', experience: '10.2', location: 'Mumbai', team: 'OCBC Singapore', image: 'woman' },
      { name: 'Alice Johnson', rating: '3', doj: '2020', reporting: 'Lalit Agarwal', mobile: '7766986885', email: 'test@infrrd.ai', department: 'Project Management', roleType: 'Part Time', designation: 'Fresher', experience: '3.4', location: 'Bangalore', team: 'IND India', image: 'man1' },
      { name: 'Robert Brown', rating: '4', doj: '2018', reporting: 'Lalit Agarwal', mobile: '7787986885', email: 'test@infrrd.ai', department: 'Human Resources', roleType: 'Contract', designation: 'Junior Developer', experience: '5.8', location: 'Hyderabad', team: 'EMEA Germany', image: 'woman1' },
      { name: 'Michael Davis', rating: '4.5', doj: '2016', reporting: 'Lalit Agarwal', mobile: '8756585757', email: 'test@infrrd.ai', department: 'Front End Development', roleType: 'Full Time', designation: 'Senior Developer', experience: '7.5', location: 'Chennai', team: 'OCBC Singapore', image: 'profile' },
      { name: 'Emily Garcia', rating: '5', doj: '2022', reporting: 'Lalit Agarwal', mobile: '8758685757', email: 'test@infrrd.ai', department: 'Back End Development', roleType: 'Part Time', designation: 'Manager', experience: '10.8', location: 'Mumbai', team: 'IND India', image: 'woman2' },
      { name: 'Daniel Martinez', rating: '4', doj: '2020', reporting: 'Lalit Agarwal', mobile: '9758685757', email: 'test@infrrd.ai', department: 'Quality Assurance', roleType: 'Contract', designation: 'Fresher', experience: '3.5', location: 'Bangalore', team: 'EMEA Germany', image: 'man1' },
      { name: 'Sophia Wilson', rating: '4.5', doj: '2018', reporting: 'Lalit Agarwal', mobile: '9867586757', email: 'test@infrrd.ai', department: 'Operations', roleType: 'Full Time', designation: 'Junior Developer', experience: '5.2', location: 'Hyderabad', team: 'OCBC Singapore', image: 'gamer' },
      { name: 'David Anderson', rating: '3', doj: '2016', reporting: 'Lalit Agarwal', mobile: '9867588679', email: 'test@infrrd.ai', department: 'Project Management', roleType: 'Part Time', designation: 'Senior Developer', experience: '7.3', location: 'Chennai', team: 'IND India', image: 'profile' },
      { name: 'Linda Thomas', rating: '3.5', doj: '2024', reporting: 'Lalit Agarwal', mobile: '9656577666', email: 'test@infrrd.ai', department: 'Human Resources', roleType: 'Contract', designation: 'Manager', experience: '10.5', location: 'Mumbai', team: 'EMEA Germany', image: 'woman' },
      { name: 'Karan Johar', rating: '3', doj: '2020', reporting: 'Lalit Agarwal', mobile: '9768565876', email: 'test@infrrd.ai', department: 'Front End Development', roleType: 'Full Time', designation: 'Fresher', experience: '5.8', location: 'Bangalore', team: 'OCBC Singapore', image: 'woman1' },
      { name: 'Pawan Kalyan', rating: '4.5', doj: '2022', reporting: 'Lalit Agarwal', mobile: '9769876876', email: 'test@infrrd.ai', department: 'Back End Development', roleType: 'Part Time', designation: 'Junior Developer', experience: '7.3', location: 'Hyderabad', team: 'IND India', image: 'man' },
      { name: 'Salman Khan', rating: '3.5', doj: '2016', reporting: 'Lalit Agarwal', mobile: '9769876879', email: 'test@infrrd.ai', department: 'Quality Assurance', roleType: 'Contract', designation: 'Senior Developer', experience: '10.2', location: 'Chennai', team: 'EMEA Germany', image: 'woman2' },
      { name: 'Narendra Modi', rating: '3', doj: '2018', reporting: 'Lalit Agarwal', mobile: '9769876767', email: 'test@infrrd.ai', department: 'Operations', roleType: 'Full Time', designation: 'Manager', experience: '3.5', location: 'Mumbai', team: 'OCBC Singapore', image: 'man1' },
      { name: 'Joe Biden', rating: '4', doj: '2020', reporting: 'Lalit Agarwal', mobile: '9769876876', email: 'test@infrrd.ai', department: 'Project Management', roleType: 'Part Time', designation: 'Fresher', experience: '5.8', location: 'Bangalore', team: 'IND India', image: 'gamer' },
      { name: 'Harish Shankar', rating: '4.5', doj: '2018', reporting: 'Lalit Agarwal', mobile: '9876876876', email: 'test@infrrd.ai', department: 'Human Resources', roleType: 'Contract', designation: 'Junior Developer', experience: '7.3', location: 'Hyderabad', team: 'EMEA Germany', image: 'man' },
      { name: 'Virat Kohli', rating: '4', doj: '2016', reporting: 'Lalit Agarwal', mobile: '8876876876', email: 'test@infrrd.ai', department: 'Front End Development', roleType: 'Full Time', designation: 'Senior Developer', experience: '10.5', location: 'Chennai', team: 'OCBC Singapore', image: 'man1' },
      { name: 'Sri Kanth', rating: '3', doj: '2022', reporting: 'Lalit Agarwal', mobile: '8098687687', email: 'test@infrrd.ai', department: 'Back End Development', roleType: 'Part Time', designation: 'Manager', experience: '3.3', location: 'Mumbai', team: 'IND India', image: 'woman' },
      { name: 'Chandra Babu', rating: '3', doj: '2020', reporting: 'Lalit Agarwal', mobile: '8098876668', email: 'test@infrrd.ai', department: 'Quality Assurance', roleType: 'Contract', designation: 'Fresher', experience: '5.8', location: 'Bangalore', team: 'EMEA Germany', image: 'woman1' },
      { name: 'Trivikram', rating: '4.5', doj: '2024', reporting: 'Lalit Agarwal', mobile: '9777988766', email: 'test@infrrd.ai', department: 'Operations', roleType: 'Full Time', designation: 'Junior Developer', experience: '7.5', location: 'Hyderabad', team: 'OCBC Singapore', image: 'profile' },
      { name: 'Rajamouli', rating: '4', doj: '2016', reporting: 'Lalit Agarwal', mobile: '9777987587', email: 'test@infrrd.ai', department: 'Project Management', roleType: 'Part Time', designation: 'Senior Developer', experience: '10.2', location: 'Chennai', team: 'IND India', image: 'woman2' },
      { name: 'Draupadi Murmu', rating: '5', doj: '2018', reporting: 'Lalit Agarwal', mobile: '9000779875', email: 'test@infrrd.ai', department: 'Human Resources', roleType: 'Contract', designation: 'Manager', experience: '3.3', location: 'Mumbai', team: 'EMEA Germany', image: 'gamer' },
      { name: 'Amit Shah', rating: '3', doj: '2020', reporting: 'Lalit Agarwal', mobile: '9000007798', email: 'test@infrrd.ai', department: 'Front End Development', roleType: 'Full Time', designation: 'Fresher', experience: '7.5', location: 'Bangalore', team: 'OCBC Singapore', image: 'woman' },
      { name: 'Rahul Dravid', rating: '3', doj: '2022', reporting: 'Lalit Agarwal', mobile: '8880000779', email: 'test@infrrd.ai', department: 'Back End Development', roleType: 'Part Time', designation: 'Junior Developer', experience: '10.8', location: 'Hyderabad', team: 'IND India', image: 'woman1' },
      { name: 'Rohit Sharma', rating: '4', doj: '2016', reporting: 'Lalit Agarwal', mobile: '7778880000', email: 'test@infrrd.ai', department: 'Quality Assurance', roleType: 'Contract', designation: 'Senior Developer', experience: '3.3', location: 'Chennai', team: 'EMEA Germany', image: 'man' },
      { name: 'Deepak Patel', rating: '4.5', doj: '2024', reporting: 'Lalit Agarwal', mobile: '6677788800', email: 'test@infrrd.ai', department: 'Operations', roleType: 'Full Time', designation: 'Manager', experience: '5.5', location: 'Mumbai', team: 'OCBC Singapore', image: 'woman2' },
    ];
  }

  getAllImageList() {
    return {
      man: '../../assets/man.png',
      man1: '../../assets/man1.png',
      profile: '../../assets/profile.png',
      woman: '../../assets/woman.png',
      woman1: '../../assets/woman1.png',
      woman2: '../../assets/woman2.png',
      gamer: '../../assets/gamer.png',
      bussiness: '../../assets/bussiness-man.png',
      man2: '../../assets/man2.png'
    }
  }

  userKeyMapList() {
    return {
      departmentList: ['Front End Development', 'Back End Development', 'Quality Assurance', 'Operations', 'Project Management', 'Human Resources'],
      roleTypeList: ['Full Time', 'Part Time', 'Contract'],
      designationList: ['Fresher', 'Junior Developer', 'Senior Developer', 'Manager'],
      experienceList: [{
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
      }],
      locationList: ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai'],
      teamList: ['OCBC Singapore', 'IND India', 'EMEA Germany']
    }
  }
}
