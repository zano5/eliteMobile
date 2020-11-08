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

    this.viewBid();
  }

  viewBid(){

    this.bidDao.getBids().subscribe(data =>{



      this.bidList = data.map(e=>{

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Bid
        }
      })
    })

  }

  deleteBid(bid){

    this.bidDao.deleteBid(bid);
  }

}
