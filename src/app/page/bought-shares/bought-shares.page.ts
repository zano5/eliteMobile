import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { BoughtSharesService } from 'src/app/service/bought-shares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bought-shares',
  templateUrl: './bought-shares.page.html',
  styleUrls: ['./bought-shares.page.scss'],
 
})
export class BoughtSharesPage implements OnInit {

  boughtSharesList = [];

  shareBought = {} as BoughtShare;

  totalIncentiveAmount =0;
  totalFutureShares = 0;
  totalSharesBought=0;




  constructor(private bidDao: BidService, private boughtShareDao: BoughtSharesService, private router: Router) {


    this.getSoldList()
   }

  ngOnInit() {


  }

  getSellList(){


    this.bidDao.getBoughtSoldShares(firebase.auth().currentUser.uid.toString()).subscribe(data=>{

      

   this.boughtSharesList=   data.map( e =>{


        


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as AcceptedBid
        } as AcceptedBid




  
       
      })


      
      
     
      

     
    })


    

    

  }


  getSoldList(){


    this.boughtShareDao.getBoughtShares(firebase.auth().currentUser.uid.toString()).subscribe( data => {




      this.boughtSharesList =  data.map(e =>{


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





  getDate(date, duration){


    
    var dateString = date

    dateString.setDate(dateString.getDate() + parseInt(duration,10))
    return dateString;
  }

  setTotalBoughtAmount(amount) {

    this.totalIncentiveAmount+=amount;

  }


  setTotalFutureShares(amount){

    this.totalFutureShares+= amount;
  }



  getTotalBoughtAmount(amount){
    
    return this.totalIncentiveAmount;
  }


  goProfile(){

    this.router.navigateByUrl('profile');

  }


}
