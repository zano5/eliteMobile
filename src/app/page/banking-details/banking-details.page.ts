import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from 'src/app/service/bid.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.page.html',
  styleUrls: ['./banking-details.page.scss'],
})
export class BankingDetailsPage implements OnInit {


  acceptedBid;
  client;
  constructor(private router: Router, private userDao: UserService, private bidDao: BidService) { }


  ngOnInit() {

    this.acceptedBid = this.bidDao.getUserAcceptedBid();

    console.log(this.acceptedBid.acceptedAmount);

  

   this.getDetails()
  }

  getDetails(){

    console.log('auctionerID', this.acceptedBid.bid.auctionerID);

    this.userDao.getUserByUserID(""+this.acceptedBid.bid.auctionerID).subscribe(data => {

        
        this.client = data.data() as Client;
        console.log(this.client);
      
    })



  }


  confirm(){

   

 

    
   
   if(this.acceptedBid.key != ''){ 

    this.acceptedBid.status = 'paid';



    let bid =  this.acceptedBid.bid;
    
   this.bidDao.setAcceptedBid(this.acceptedBid).then(() => {

      alert('Payment Status Confirmed');


      this.bidDao.updateBid(bid);
      
      console.log(this.acceptedBid);

      this.router.navigateByUrl('sidemu/dashboard');


   })

  }else{

    alert('Invalid Share Sale');

  }
  

  }

  getUser(){


  }

}
