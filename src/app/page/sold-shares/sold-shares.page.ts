import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sold-shares',
  templateUrl: './sold-shares.page.html',
  styleUrls: ['./sold-shares.page.scss'],
})
export class SoldSharesPage implements OnInit {

  reference = '';

  soldShareList = [];

  constructor(private bidDao: BidService, private router: Router) { }

  ngOnInit() {

    this.getUserSoldShares();
  }


  getUserSoldShares(){

    this.bidDao.getUserSoldShares(firebase.auth().currentUser.uid).subscribe(data => {

      this.soldShareList = data.map(e => {

        return {

          key: e.payload.doc.id,
          ...e.payload.doc.data() as AcceptedBid
        } as AcceptedBid
      })


    })

  }

  
  goProfile(){


    this.router.navigateByUrl('profile');
  }


  search(event){

      if(this.reference != ''){


        this.bidDao.getUserSoldSharesByReference(firebase.auth().currentUser.uid, this.reference).subscribe(data=>{


          this.soldShareList = data.map(e => {

            return{
            key: e.payload.doc.id,
            ...e.payload.doc.data() as AcceptedBid
            } as AcceptedBid;
          })


              console.log("check",this.soldShareList);
        })




      } else{

          this.getUserSoldShares();
      }

      }

  }



