import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  acceptedBid;

  constructor(private asf: AngularFirestore) { }



  createUser(client, userID){

   return this.asf.collection('User').doc(userID).set(client);

  }


  getUser(userID){

    return this.asf.collection('User').doc(userID).get();
  }

  updateUser(user){

    return this.asf.collection('User').doc(user.userID).update(user).then(() =>{


      alert('User Details Updated');
    }).catch(err => {

      alert(err.message + ' User details not updated');
    });
  }


  getUsers(){

    return this.asf.collection('User').snapshotChanges();
  }


  getUserByEmail(email){

    return this.asf.collection('User',ref =>ref.where('email', '==', email)).snapshotChanges();
  }


  getUserByUserID(userID){

    return this.asf.collection('User',ref =>ref.where('userID', '==', userID)).doc(userID).get();
  }

  getUserByUserIDBid(userID){

    return this.asf.collection('User',ref =>ref.where('userID', '==', userID)).get();
  }


  getUserReferralsByUserID(userID){

    return this.asf.collection('User', ref =>ref.where('referredBy', '==', userID)).snapshotChanges();
  }

  checkUsername(username){

    return this.asf.collection('User', ref =>ref.where('username', '==', username)).snapshotChanges();

  }

 
   

 



}