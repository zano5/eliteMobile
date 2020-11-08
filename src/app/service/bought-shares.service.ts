import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BoughtSharesService {

  constructor(private asf: AngularFirestore) { }




  addBoughtShare(boughtShare){



    return this.asf.collection('BoughtShares').add(boughtShare)
  }


  getBoughtShares(userID){


    return this.asf.collection('BoughtShares', ref=> ref.where('bidderID', '==', userID)).snapshotChanges();
  }

}
