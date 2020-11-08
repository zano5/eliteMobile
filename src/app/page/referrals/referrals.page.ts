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
  constructor(private router: Router, private userDao: UserService) { 


    
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

          });

      });

     

    }


 
  goProfile(){


    this.router.navigateByUrl('profile');
  }

}
