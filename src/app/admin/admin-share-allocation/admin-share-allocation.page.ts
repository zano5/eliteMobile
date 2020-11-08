import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BidService } from 'src/app/service/bid.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-share-allocation',
  templateUrl: './admin-share-allocation.page.html',
  styleUrls: ['./admin-share-allocation.page.scss'],
})
export class AdminShareAllocationPage implements OnInit {

  userList = [];
  email ='';
  bid = {} as Bid;
  amount;

  constructor(private userDao: UserService, private bidDao: BidService) { }

  ngOnInit() {
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

    this.userList = [];
  }
  }

  addSell(user){

    console.log('user',user);



    if(this.amount > 499){
    this.bid.amount= this.amount;
    this.bid.bankName = user.bankName;
    this.bid.createDate = new Date();
    this.bid.auctionerID = user.key;
    this.bid.username = user.username;


    this.bidDao.setBid(this.bid);

    this.amount = 0;
    }else {

       alert('Amount can not be less than 500');

    }




  }


}
