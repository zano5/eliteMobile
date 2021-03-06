import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BidService } from 'src/app/service/bid.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bid-filter',
  templateUrl: './bid-filter.page.html',
  styleUrls: ['./bid-filter.page.scss'],
})
export class BidFilterPage implements OnInit {

  bidList = [];
  amount;
  userID;

  constructor(private bidDao: BidService, private route: ActivatedRoute) {
    this.userID = firebase.auth().currentUser.uid;
   }

  ngOnInit() {

    this.userID = firebase.auth().currentUser.uid;

    this.route.queryParams.subscribe(params => {

   

      this.amount =parseInt(params['amount'], 10);

      console.log(this.amount);
    });


    this.getBid(this.amount);
  }


  getBid(amount){


    if(amount == 5000){

      this.bidDao.getBidsByFilter5000(amount, this.userID).subscribe(data => {


        this.bidList =   data.map(e => {
     
             return{
     
               key: e.payload.doc.id,
               ...e.payload.doc.data() as Bid
             } as Bid
     
           })
     
     
           console.log('List',this.bidList);
         });

    }else if(amount == 10000){

      this.bidDao.getBidsByFilter10000(amount, this.userID).subscribe(data => {


        this.bidList =   data.map(e => {
     
             return{
     
               key: e.payload.doc.id,
               ...e.payload.doc.data() as Bid
             } as Bid
     
           })
     
     
           console.log('List',this.bidList);
         });

    }else if(amount == 15000){

      this.bidDao.getBidsByFilter15000(amount, this.userID).subscribe(data => {


        this.bidList =   data.map(e => {
     
             return{
     
               key: e.payload.doc.id,
               ...e.payload.doc.data() as Bid
             } as Bid
     
           })
     
     
           console.log('List',this.bidList);
         });

    }

   
    
  }

}
