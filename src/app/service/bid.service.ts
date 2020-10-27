import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BidService {

 
  constructor(private asf: AngularFirestore) { }


  getBids(){


    return this.asf.collection('Bidding').snapshotChanges();
    
  }

  getUserBids(userID){

    return this.asf.collection('Bidding').snapshotChanges();
  }


  setBid(bid){

    this.asf.collection('Bidding').add(bid).then(() => {

      alert('Your BID was added!');

    }).catch(err => {

      alert(err.message + ' Bid Not Added!');
    });
  }


  updateBid(bid){

    this.asf.collection('Bidding').doc(bid.key).update(bid)

  }


  setAcceptedBid(acceptedBid){

    this.asf.collection('AcceptedBid').add(acceptedBid).then(() => {

    }).catch(err => {


    });



  }

  getBidsByFilter(amount){


    return this.asf.collection('Bidding',ref => ref.where('amount', '<=', amount)).snapshotChanges();
    


  }


  getBidsByFilter5000(amount){


    return this.asf.collection('Bidding',ref => ref.where('amount', '<=', 5000).where('amount', '<=', 5000)).snapshotChanges();
  }


  getBidsByFilter10000(amount){


    return this.asf.collection('Bidding',ref => ref.where('amount', '>=', 5000 ).where('amount', '==', 10000)).snapshotChanges();
  }


  getBidsByFilter15000(amount){


    return this.asf.collection('Bidding',ref => ref.where('amount', '>=', 10000).where('amount', '==', 15000)).snapshotChanges();
  }



}
