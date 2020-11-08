import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BidService {

  ref;
  task;
  uploadProgress;
downloadURL;


  acceptedBid;
  bid;
  constructor(private asf: AngularFirestore, private storage: AngularFireStorage) { }


  getBids(){


    return this.asf.collection('Bidding').snapshotChanges();
    
  }

  getUserBids(){

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

   return this.asf.collection('AcceptedBid').add(acceptedBid);


  }

  getBidsByFilter(amount){


    return this.asf.collection('Bidding',ref => ref.where('amount', '<=', amount)).snapshotChanges();
    


  }


  getBidsByFilter5000(amount, userID){


    return this.asf.collection('Bidding',ref => ref.where('amount', '<=', 3000).where('amount', '<=', 3000).where('amount', '>', 0)).snapshotChanges();
  }


  getBidsByFilter10000(amount, userID){


    return this.asf.collection('Bidding',ref => ref.where('amount', '>=', 3000 ).where('amount', '==', 6000).where('amount', '>', 0)).snapshotChanges();
  }


  getBidsByFilter15000(amount, userID){


    return this.asf.collection('Bidding',ref => ref.where('amount', '>=', 6000).where('amount', '==', 10000).where('amount', '>', 0)).snapshotChanges();
  }


  userAcceptedBid(acceptedBid){

    this.acceptedBid = acceptedBid;
    console.log('User Accepted Bid', acceptedBid);
    }
  
  
    getUserAcceptedBid(){
  
        return this.acceptedBid;
    }

    updateAcceptedBide(acceptedBid){

      console.log('service', acceptedBid.key);
     return this.asf.collection('AcceptedBid', ref=> ref.where('amount', '>',0  )).doc(acceptedBid.key).update(acceptedBid);

    }

    getUserAcceptedBids(userID){

      return this.asf.collection('AcceptedBid', ref=> ref.where('bid.auctionerID', '==', userID).where('status', '==', 'paid').where('received', '==', 'none')).snapshotChanges();

    }


    getUserSoldShares(userID){

      return this.asf.collection('AcceptedBid', ref=> ref.where('bid.auctionerID', '==', userID).where('status', '==', 'paid').where('received', '==', 'paid')).snapshotChanges();

    }


    getActivitySoldShares(userID){


      return this.asf.collection('AcceptedBid', ref=> ref.where('bid.auctionerID', '==', userID).where('status', '==', 'paid').where('received', '==', 'paid')).snapshotChanges();

    }


    
    getBoughtSoldShares(userID){


      return this.asf.collection('AcceptedBid', ref=> ref.where('bidderID', '==', userID).where('status', '==', 'paid').where('received', '==', 'paid')).snapshotChanges();

    }


    getUserSoldSharesByReference(userID, reference){

      return this.asf.collection('AcceptedBid', ref=> ref.where('bid.auctionerID', '==', userID).where('status', '==', 'paid').where('received', '==', 'paid').where('reference', '==', reference)).snapshotChanges();

    }


    deleteBid(bid){


      this.asf.collection('Bidding').doc(bid.key).delete();
    }

    setBidItem(){

    }

    getPendingBids(userID){

      return this.asf.collection('AcceptedBid', ref=> ref.where('bidderID', '==', userID).where('status', '==', 'paid').where('received', '==', 'none')).snapshotChanges();
    }



    uploadDocument(acceptedBid, selectFile){

      const fileName = this.makeid(10);
      // this.afs.upload('/upload/to/this-path', event.target.files[0]);
   
     // const randomId = Math.random().toString(36).substring(2);
        const file = selectFile;
        const filePath = 'uploads/payment/' + fileName;
        this.ref = this.storage.ref(filePath)
   
    
        this.task = this.storage.upload(filePath, file)


              acceptedBid.fileNameUrl = fileName;
         
                  acceptedBid.uploadStatus ='completed';
             
        


     
   
       
      

        
        

        this.updateAcceptedBide(acceptedBid);
   
   
   
   
   
       return this.uploadProgress = this.task.percentageChanges();

    }

    makeid(length) {
      let result           = '';
      const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (  let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
    

   retreiveImage(image) {

    console.log(image);

    
    let ref = this.storage.ref('uploads/payment/' + image)
   return  ref.getDownloadURL();

     
  }


 



}
