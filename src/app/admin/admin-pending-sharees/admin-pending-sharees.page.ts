import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BidService } from 'src/app/service/bid.service';

@Component({
  selector: 'app-admin-pending-sharees',
  templateUrl: './admin-pending-sharees.page.html',
  styleUrls: ['./admin-pending-sharees.page.scss'],
})
export class AdminPendingShareesPage implements OnInit {

  acceptedBidList;
  key;
  url;

  constructor(private bidDao: BidService, private route: ActivatedRoute) { }

  ngOnInit() {



    this.route.queryParams.subscribe( params =>{

      this.key = params['key'];

    })

    this.bidDao.retreiveImage('hjk');

    this.getMyPendingPayment(this.key);
  }

  
  getMyPendingPayment(key){
    
  

   

    this.bidDao.getUserAcceptedBids( this.key).subscribe(data => {


      this.acceptedBidList = data.map(e => {

        let object = e.payload.doc.data() as AcceptedBid
        console.log('object', object.fileNameUrl);
        return{

          key: e.payload.doc.id,
          url: this.retrieveImage(object.fileNameUrl),
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


      
  



    

    })


    


  

    


  }

  retrieveImage(name){

   




  return  this.bidDao.retreiveImage(name);
  

  }

}
