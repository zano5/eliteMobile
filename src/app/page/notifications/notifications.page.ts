import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';

import * as firebase from 'firebase';
import { BoughtSharesService } from 'src/app/service/bought-shares.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  acceptedBidList= [];
  boughtShare = {} as BoughtShare;

  constructor(private bidDao: BidService, private soldShareDao: BoughtSharesService ) { }

  ngOnInit() {

    this.getMyPendingPayment();



  }

  getMyPendingPayment(){
    
    console.log('userID', firebase.auth().currentUser.uid.toString());

   

    this.bidDao.getUserAcceptedBids(firebase.auth().currentUser.uid.toString()).subscribe(data => {


      this.acceptedBidList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as AcceptedBid
        } as AcceptedBid




      })

      console.log('AcceptedBidList', this.acceptedBidList);

    })
  

  }


  confirm(acceptedBid){

    acceptedBid.received = 'paid';

    this.bidDao.updateAcceptedBide(acceptedBid).then(() =>{

      alert('You Confirmed Payment');


      
    this.boughtShare.shares = acceptedBid.acceptedAmount;
    this.boughtShare.boughtDate = acceptedBid.createdDate;
    this.boughtShare.percentage = acceptedBid.percentage;
    this.boughtShare.futureShares = (acceptedBid.acceptedAmount * acceptedBid.percentage + acceptedBid.acceptedAmount); 
    this.boughtShare.bidderID = acceptedBid.bidderID;
    this.boughtShare.auctionerID = acceptedBid.bid.auctionerID;

console.log('date', this.boughtShare.boughtDate);

    this.boughtShare.soldDate = this.getDate(acceptedBid.createdDate, acceptedBid.acceptedDuration);


    

    this.soldShareDao.addBoughtShare(this.boughtShare);
    })


    


  

    


  }


 
  getDate(date, duration){


    
    var dateString = date.toDate();

    dateString.setDate(dateString.getDate() + parseInt(duration,10))
    return dateString;
  }

}
