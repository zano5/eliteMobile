import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BidService } from 'src/app/service/bid.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  uploadProgress;
  pending;
  event;
  selectFile;

  constructor(private modal: ModalController, private bidDao: BidService) { }

  ngOnInit() {
    
    this.uploadDocument();
  }


  uploadDocument(){

    this.uploadProgress = this.bidDao.uploadDocument(this.pending, this.selectFile)

    console.log(this.uploadProgress);

 
    
  }

  close(){

    this.modal.dismiss();
  }

}
