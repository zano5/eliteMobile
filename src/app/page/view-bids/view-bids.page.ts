import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';

@Component({
  selector: 'app-view-bids',
  templateUrl: './view-bids.page.html',
  styleUrls: ['./view-bids.page.scss'],
})
export class ViewBidsPage implements OnInit {

  bidList = [];

  constructor(private bidDao: BidService) { }

  ngOnInit() {


    this.getBids();
  }



  getBids(){

    this.bidDao.getBids().subscribe(data => {


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
