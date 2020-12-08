import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { PhoneNumber } from 'src/app/modal/phoneNumber';
import { UserService } from 'src/app/service/user.service';
import { WindowService } from 'src/app/service/window.service';

var firebaseConfig = {
  apiKey: "AIzaSyCtE6VNKCzRHJrYK2d8-84fAF_13VQ3OJs",
  authDomain: "eliteshare-daf6c.firebaseapp.com",
  databaseURL: "https://eliteshare-daf6c.firebaseio.com",
  projectId: "eliteshare-daf6c",
  storageBucket: "eliteshare-daf6c.appspot.com",
  messagingSenderId: "1066163952",
  appId: "1:1066163952:web:45bc0e837c42dcd51fec35",
  measurementId: "G-KBRSK2H0TW"
};


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  client= {} as Client;

  clientItem;

  userID;

  constructor( private win: WindowService, private router: Router, private auth: AngularFireAuth, private userDao: UserService, private route: ActivatedRoute) { }

  ngOnInit() {


    this.route.queryParams.subscribe(params =>{


      this.userID = params['userID'];

    })

    if(this.auth.currentUser != null){

    //firebase.initializeApp(firebaseConfig);

    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()

    }else{



    
      
   




 
    }
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

              

            })
            .catch(err => {

                  alert(err.message);

            })
            

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {


                    this.user = result.user;

                    console.log('user info', result.user);

                 
                    console.log('clientID',this.user.uid)

                   this.userDao.getUserByUserID(this.userID).subscribe(data => {



                     this.clientItem = data.data() as Client;

                     console.log( 'client', ""+this.client)
        
                    this.client.contact= this.phoneNumber.country + '' +this.phoneNumber.area + '' + this.phoneNumber.prefix + '' + this.phoneNumber.prefix;

                    this.userDao.updateUser(this.client).then(() => {


                      this.router.navigateByUrl('login');

                    });


                    })
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

}
