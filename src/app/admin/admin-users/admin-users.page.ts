import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminUserModalPage } from '../admin-user-modal/admin-user-modal.page';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { BidService } from 'src/app/service/bid.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {

bidList = [];
email ="";
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

  constructor(private userDao: UserService, private modal: ModalController, private loginDao: LoginService, private router: Router, private bidDao: BidService) { }

  ngOnInit() {


    this.getUsers();
    this.viewBid();
  }


  getUsers(){

    if(this.email == ''){

    this.userDao.getUsers().subscribe(data => {


      this.userList = data.map(e =>{


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Client
        } as Client;
      })


    });

  }else{



  }
  }


  
  async presentModal(user) {
    const modal = await this.modal.create({
      component: AdminUserModalPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        user: user
       
      }
    });
    return await modal.present();
  }

  signOut(){

    this.loginDao.signOut().then(() => {

      this.router.navigateByUrl('admin-sign-in');


    })
  }


  search(event){

    if(this.email != ''){

    this.userDao.getUserByEmail(this.email).subscribe(data => {


      this.userList = data.map(e =>{


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Client
        } as Client;
      })


    });
  }else{

    this.getUsers();
  }
  }


  allocateShares(){

    this.router.navigateByUrl('admin-share-allocation')
  }

  accouncements(){

  this.router.navigateByUrl('accouncements');
  }

  viewBid(){


    this.bidDao.getBids().subscribe(data => {


      this.bidList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Bid
        }
      })


    });

  }


  viewBids(){

    this.router.navigateByUrl('view-bids')

  }

  viewAccouncement(){


    this.router.navigateByUrl('view-announcements');
  }


}
