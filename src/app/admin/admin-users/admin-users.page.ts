import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {


  userList;

  // public pieChartOptions= {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public pieChart1labels = ["Female", "Male", "Trans Gender", "Not Specified"];
  // public pieChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChart1Data = [
  //   {data: [0, 0, 0, 0], label: 'Series A'},
  // ]

  // public pieChart2labels = ["Christian", "Hindu", "Muslim", "Jewish", "None", "Other", "Prefer not to say"]
  // public pieChart2Data = [
  //   {data: [0, 0, 0, 0,0,0,0], label: 'Series A'},
  // ]


  // public pieChart3labels = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"]
  // public pieChart3Data = [
  //   {data: [0, 0, 0, 0,0,0,0], label: 'Series A'},
  // ]



  // initGenderData = [0, 0, 0, 0]
  // initReligionData = [0, 0, 0, 0, 0, 0, 0]
  // initAgeData = [0, 0, 0, 0, 0, 0, 0]

  // genderData = [0, 0, 0, 0]
  // religionData = [0, 0, 0, 0, 0, 0, 0]
  // ageData = [0, 0, 0, 0, 0, 0, 0]

  constructor(private userDao: UserService) { }

  ngOnInit() {


    this.getUsers();
  }


  getUsers(){

    this.userDao.getUsers().subscribe(data => {


      this.userList = data.map(e =>{


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Client
        } as Client;
      })


    });
  }

}
