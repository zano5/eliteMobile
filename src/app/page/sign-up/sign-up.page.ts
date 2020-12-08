import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import * as firebase from 'firebase';
import { UserService } from 'src/app/service/user.service';
import { PhoneNumber } from 'src/app/modal/phoneNumber';
import { WindowService } from 'src/app/service/window.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  client = {} as Client;
  id;
  username ='';
  refferBy ='';



  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  userHide = 'email';

  constructor(fb: FormBuilder, private loginDoa: LoginService, private router: Router, private userDao: UserService,  private route: ActivatedRoute, private win: WindowService, private auth: AngularFireAuth) {

    this.id= this.route.snapshot.paramMap.get('id');
    console.log('link test', this.id);

    this.getUserByUserID(this.id);

    console.log('sim', this.username);

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      bankAccount: ['', [Validators.required]],
      bankName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      confirmPassword:[''],
      password: ['', [Validators.required]],
  
    });


  }

  form: FormGroup
  submitted = false
  error = ''

  ngOnInit() {

    this.getUserByUserID(this.id);


  }


  ionViewDidEnter(){

    if(this.auth.currentUser != null){


      this.windowRef = this.win.windowRef;
      this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

      this.windowRef.recaptchaVerifier.render();

      }else{

        alert('Error In User State');

      }

  }

  valid(field) {
    if (!this.submitted) {
      return true
    }

    return this.form.get(field).valid
  }

  submit() {
    this.submitted = true
    this.error = '';
 
    if (this.form.valid) {

      this.username = this.form.value.username;

      console.log('test');

      if(this.form.value.password =  this.form.value.confirmPassword){




        this.userDao.checkUsername(this.username).subscribe(data =>{


          if(data.length != 0){
            alert('Username taken!');

            console.log('simName',data.length);
          }else{

              console.log('zanoxolo');
            this.userHide ='phone';


            this.loginDoa.createEmailPassword(this.form.value.email, this.form.value.password).then(data=>{

              this.client.email = this.form.value.email;
              this.client.username = this.form.value.username;
              this.client.bankAccount = parseInt(this.form.value.bankAccount);
              this.client.bankName = this.form.value.bankName;
              this.client.referredBy = this.username;
              this.client.userID = data.user.uid.toString();
              // tslint:disable-next-line:max-line-length
 
              this.userDao.createUser(this.client, data.user.uid);


              this.router.navigate(['login-user'], {queryParams: {userID: this.client.userID}});
});


      }
    })



      }else{



        alert('Passwords Do Not Match!');
      }
  }

}

  getUserByUserID(userID){



    if(userID != ''){
    this.userDao.getUserByUserID(""+userID).subscribe( data => {


        this.refferBy = data.data().username;
        console.log(data.data());


    });

  }else{

      this.refferBy = '';

  }


  }

  

  

}
