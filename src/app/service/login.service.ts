import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }


  createEmailPassword(email, password){

     return this.auth.createUserWithEmailAndPassword(email,password);
  }


  login(email,password){

  return this.auth.signInWithEmailAndPassword(email,password);
  }

  signOut(){

   return this.auth.signOut();
  }

  
  }