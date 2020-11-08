import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/service/bid.service';
import * as firebase from 'firebase';
import { LoaderPage } from '../loader/loader.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pending-shares',
  templateUrl: './pending-shares.page.html',
  styleUrls: ['./pending-shares.page.scss'],
})
export class PendingSharesPage implements OnInit {

  pendingBidList = [];
  selectedFile: File;
  

  constructor(private bidDao: BidService, private modalController: ModalController) { }

  ngOnInit() {

    this.getPendingBids();
  }

  getPendingBids(){


    this.bidDao.getPendingBids(firebase.auth().currentUser.uid.toString()).subscribe(data => {

      this.pendingBidList = data.map(e => {

        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as AcceptedBid

        } as AcceptedBid

        console.log('pendingList', this.pendingBidList);

      })




    })
  }

  onFileChanged(event, pending) {
    this.selectedFile = event.target.files[0]

    

    console.log(this.selectedFile);


    if(this.selectedFile != null){


      this.presentModal(pending);

    }
  }

  async presentModal(pending) {
    const modal = await this.modalController.create({
      component: LoaderPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        pending: pending, 
        selectFile: this.selectedFile 
       
      }
    });
    return await modal.present();

  
  }

}
