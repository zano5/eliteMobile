import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementsService {

  constructor(private asf: AngularFirestore) { }


  sendAnnoucements(message) {

    return this.asf.collection('Annoucements').add(message);


  }


  updateAccouncements(message){

    this.asf.collection('Annoucements').doc(message.key).update(message).then(() =>{


    }).catch(err => {



    })
  }


  deleteAccouncements(message){


    this.asf.collection('Annoucements').doc(message.key).delete();
  }


  getAnnouncements(){

    return  this.asf.collection('Annoucements').snapshotChanges();
  }


}
