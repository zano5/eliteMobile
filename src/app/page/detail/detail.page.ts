import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BidService } from 'src/app/service/bid.service';
import { AddBidPage } from '../add-bid/add-bid.page';
import * as firebase from 'firebase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  bidList =[];
  amount;
  range ="5000";
  userID;
  forBidList = [];

  constructor(private router: Router, private bidDao: BidService, public modalController: ModalController) {

    this.userID = firebase.auth().currentUser.uid.toString();
   }

  ngOnInit() {

    this.amount = parseInt(this.range, 10)
    this.getBid(this.amount);

    this.userID = firebase.auth().currentUser.uid.toString();
  }


  async presentModal(bid) {
    const modal = await this.modalController.create({
      component: AddBidPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        bid: bid
       
      }
    });
    return await modal.present();

  
  }


  buy(){
    this.router.navigateByUrl('banking-detail');
  }


  // goAmount1(){

  //   this.router.navigate(['bid-filter'], {queryParams: {amount: 5000  }})

  // }

  // goAmount2(){

    
  //   this.router.navigate(['bid-filter'], {queryParams: {amount: 10000  }})
  // }


  // goAmount3(){

    
  //   this.router.navigate(['bid-filter'], {queryParams: {amount: 15000  }})

  // }


  
  getBid(amount){


    if(amount == 5000){

      this.bidList = [];

      this.bidDao.getBidsByFilter5000(amount, this.userID).subscribe(data => {

      

            data.map(e => {
     
          let object = e.payload.doc.data() as Bid;

            


            console.log('userID', this.userID)
            console.log('auctionerID', object.auctionerID)

           
                if(this.userID != object.auctionerID){

          

                  this.bidList.push({key: e.payload.doc.id, auctionerID: object.auctionerID, createdDate: object.createDate, amount: object.amount, bankName: object.bankName})

            
                console.log('list', this.bidList);

           
                }

            //  return{
     
            //    key: e.payload.doc.id,
            //    ...e.payload.doc.data() as Bid
            //  } as Bid

           
        
     
           })
     
           
         });

    }else if(amount == 10000){

      this.bidList = [];

      this.bidDao.getBidsByFilter10000(amount, this.userID).subscribe(data => {


       data.map(e => {
     
          let object = e.payload.doc.data() as  Bid;
         

            console.log('userID', this.userID)
            console.log('auctionerID', object.auctionerID)


                
            if(this.userID != object.auctionerID){


          

              this.bidList.push({key: e.payload.doc.id, auctionerID: object.auctionerID, createdDate: object.createDate, amount: object.amount, bankName: object.bankName})

                 
              console.log('list', this.bidList);


       }
     

            //  return{
     
            //    key: e.payload.doc.id,
            //    ...e.payload.doc.data() as Bid
            //  } as Bid
     
            
           })
     
     
           console.log('List',this.bidList);
         });

    }else if(amount == 15000){

      this.bidList = [];

      this.bidDao.getBidsByFilter15000(amount, this.userID).subscribe(data => {


       data.map(e => {

          let object = e.payload.doc.data() as Bid;




            console.log('userID', this.userID)
            console.log('auctionerID', object.auctionerID)


   

                if(this.userID != object.auctionerID){
          

              this.bidList.push({key: e.payload.doc.id, auctionerID: object.auctionerID, createdDate: object.createDate, amount: object.amount, bankName: object.bankName})

        
                }

       
     
            //  return{
     
            //    key: e.payload.doc.id,
            //    ...e.payload.doc.data() as Bid
            
            
            //   } as Bid
          
           })
     
     
           console.log('List',this.bidList);
         });

    }

   
    
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);

  console.log(this.range);


  console.log('test',this.range);
  this.amount = parseInt(this.range, 10)
  this.getBid(this.amount);
  }

  goProfile(){


    this.router.navigateByUrl('profile');
  }




}
