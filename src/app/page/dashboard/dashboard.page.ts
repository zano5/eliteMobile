import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';
import * as firebase from 'firebase';
import { AnnoucementsService } from 'src/app/service/annoucements.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { BoughtSharesService } from 'src/app/service/bought-shares.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  acceptedBidCount;
  activityList = [];
  usersCount;
  referralCount =0;
  totalSharesBought =0;
  totalIncentiveAmount= 0;
  totalSoldShares = 0;

  totCurrent
  totalAvailableShares =0;

  announcementsList =[];
  page =0;
  maximumPage = 3;

  constructor(private bidDao: BidService, private announcementsDao: AnnoucementsService, private userDao: UserService, private router: Router, private boughsharesDao: BoughtSharesService) { }

  ngOnInit() {


    this.getUsersCount();

    this.getActivitySharesList();

    this.getAnnouncements();

    this.getBidCount();

    this.getShareCalulations();

    this.getUserSoldShares();

    this.getReferralCount();

    this.getCurrentShares();
  }

  getBidCount(){


    console.log('userID', firebase.auth().currentUser.uid.toString());

    this.bidDao.getUserAcceptedBids(firebase.auth().currentUser.uid.toString()).subscribe(data => {


      this.acceptedBidCount = data.length;

      console.log('counter', this.acceptedBidCount);
    })


  }

  getAnnouncements(){

    this.announcementsDao.getAnnouncements().subscribe(data => {


      
      this.announcementsList = data.map(e=> {


     

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Announcement



        } as Announcement;
      })

        console.log('Announcements', this.announcementsList);

    })
  }

  getActivitySharesList(event?){

      this.bidDao.getActivitySoldShares(firebase.auth().currentUser.uid.toString()).subscribe(data => {



  this.activityList = data.map(e=> {

    return{

      key: e.payload.doc.id,
      ...e.payload.doc.data() as AcceptedBid
    } as AcceptedBid;
  })

      })

      if(event){
        event.target.complete();
      }

  }


  getUsersCount(){

      this.userDao.getUsers().subscribe(data =>{

        this.usersCount = data.length;

        console.log(this.usersCount);
      })

  }

  goNotifications(){

    this.router.navigateByUrl('sidemu/notifications')
  }


  


  getReferralCount(){


    this.userDao.getUserReferralsByUserID(firebase.auth().currentUser.uid.toString()).subscribe(data =>{

      
    
   this.referralCount = data.length;

       

    });



  }


  getShareCalulations(){

    this.boughsharesDao.getBoughtShares(firebase.auth().currentUser.uid.toString()).subscribe( data => {




     data.map(e =>{


        let object = e.payload.doc.data() as BoughtShare;

        this.totalSharesBought+= object.shares;
        this.totalIncentiveAmount +=  object.shares * 0.05;

        return{

          key: e.payload.doc.id,
          ... e.payload.doc.data() as BoughtShare
        } as BoughtShare



     

    


      })


    })

  }


  getUserSoldShares(){

    this.bidDao.getUserSoldShares(firebase.auth().currentUser.uid.toString()).subscribe(data => {

  
     data.map(e => {

      


      let object = e.payload.doc.data() as AcceptedBid;

       this.totalSoldShares += object.acceptedAmount; 
     })


    })

  }

  getCurrentShares(){


    this.bidDao.getUserBids().subscribe(data=> {

      data.map(e => {


            let object = e.payload.doc.data() as Bid;

            console.log(object);
       

            this.totalAvailableShares +=object.amount;
            
      })


    })


  }



  

  loadData(event){

    console.log(event);
    this.page++;
    this.getActivitySharesList();

    if(this.page == this.maximumPage){
      event.target.disabled = true;
    }
  }


 




}
