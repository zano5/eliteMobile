import { BidService } from './../../service/bid.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.page.html',
  styleUrls: ['./referrals.page.scss'],
})
export class ReferralsPage implements OnInit {

  userID;
  userList;
  userReferenceList;

  amount;
  constructor(private router: Router, private userDao: UserService, private bidDao: BidService) { 


  }

  ngOnInit() {

    this.userID = firebase.auth().currentUser.uid.toString();
  this.getUserRefferals();
  }


    getUserRefferals(){


      this.userDao.getUserReferralsByUserID(firebase.auth().currentUser.uid.toString()).subscribe(data =>{



        this.userList = data.map(e => {





          return{

            key: e.payload.doc.id,
            ...e.payload.doc.data() as Client



          }as Client


          let object = e.payload.doc.data() as Object;

          







          });


      });


    }



  goProfile(){


    this.router.navigateByUrl('profile');
  }


  

}
