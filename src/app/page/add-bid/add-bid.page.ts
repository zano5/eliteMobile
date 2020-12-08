import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BidService } from 'src/app/service/bid.service';

import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.page.html',
  styleUrls: ['./add-bid.page.scss'],
})
export class AddBidPage implements OnInit {
  

  acceptBid = {} as AcceptedBid;
  bid;

  bidTest = {} as Bid;
  constructor(private modal: ModalController, private bidDao: BidService, private router: Router ) { }


  ngOnInit() {

  
  console.log(`${this.bid}`);
  
  }

  close(){

    this.modal.dismiss();

  }


  makeBid(){
    console.log('duration', this.acceptBid.acceptedDuration);

    this.acceptBid.bidderID = firebase.auth().currentUser.uid;
    this.acceptBid.createdDate = new Date()
    this.acceptBid.bid = this.bid;
    this.acceptBid.status = 'Unpaid';
    this.acceptBid.reference = 'elite'+ this.makeid(4);


   


 if(this.bid.amount != 0){

  if(this.acceptBid.acceptedAmount  ){
 


  

   

  this.bidDao.userAcceptedBid(this.acceptBid);



    
    this.acceptBid.received='none';

    let value = parseInt(this.acceptBid.acceptedDuration);
    if(value == 3){
    this.acceptBid.percentage = 0.35;

    }else if(value == 8){
      this.acceptBid.percentage = 0.75;
    }else if(value == 12){
      this.acceptBid.percentage = 1.20;
    }
   if(this.acceptBid.key != ''){ 


    if(this.acceptBid.bid.amount >= this.acceptBid.acceptedAmount){

    let bid =  this.acceptBid.bid;
    
    bid.amount =  bid.amount - this.acceptBid.acceptedAmount;

    console.log('the bid', bid);

   this.bidDao.setAcceptedBid(this.acceptBid).then(() => {

      alert('Shares Bought');


      this.bidDao.updateBid(bid);
      

      

      console.log(this.acceptBid);

     


    
      this.close();
      this.router.navigateByUrl('banking-details');
  
  

   })

  }else{

    alert('Invalid Share Sale');

  }
   }else{

    console.log('error');
   }


  }else{


    alert('Mimimum Bid is 500');
  }

 }else{


  alert('Bid has been taken');

  this.close();

 }
   


  }

   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 buyAll(){

  console.log('duration', this.acceptBid.acceptedDuration);

  this.acceptBid.bidderID = firebase.auth().currentUser.uid;
  this.acceptBid.createdDate = new Date()
  this.acceptBid.bid = this.bid;
  this.acceptBid.status = 'Unpaid';
  this.acceptBid.reference = 'elite'+ this.makeid(4);


 


if(this.bid.amount != 0){

if(this.acceptBid.acceptedAmount  ){





 

this.bidDao.userAcceptedBid(this.acceptBid);



  
  this.acceptBid.received='none';

  let value = parseInt(this.acceptBid.acceptedDuration);
  if(value == 3){
  this.acceptBid.percentage = 0.35;

  }else if(value == 8){
    this.acceptBid.percentage = 0.75;
  }else if(value == 12){
    this.acceptBid.percentage = 1.20;
  }
 if(this.acceptBid.key != ''){ 


  if(this.acceptBid.bid.amount >= this.acceptBid.acceptedAmount){

  let bid =  this.acceptBid.bid;
  
  bid.amount =  bid.amount - this.acceptBid.acceptedAmount;

  console.log('the bid', bid);

 this.bidDao.setAcceptedBid(this.acceptBid).then(() => {

    alert('Shares Bought');


    this.bidDao.updateBid(bid);
    

    

    console.log(this.acceptBid);


    this.close();
    this.router.navigateByUrl('banking-details');



 })

}else{

  alert('Invalid Share Sale');

}
 }else{

  console.log('error');
 }

}else{


  alert('Mimimum Bid is 500');
}

 
}else{


alert('Bid has been taken');

this.close();

}


 }
 


}
