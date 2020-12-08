import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  hide = true;

  mail;
  pass;

  form: FormGroup;
  submitted = false
  error = '';

  platform;

  constructor(private fb: FormBuilder,
    private route :Router, private loginDao: LoginService, private plat: Platform, private auth: AngularFireAuth) {
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }


  login() {
    this.route.navigateByUrl('request-details');
  }
  valid(field) {
    if (!this.submitted) {
      return true
    }
    return this.form.get(field).valid
  }

  submit(){
  
    this.error = '';
   
    if (this.form.valid) {
 
    let mail =this.form.value.email;
    let password = this.form.value.password;
   
     // this.authService.signIn(mail,password);
      console.log(mail);
      console.log(password);

      

        this.loginDao.login(mail,password).then(() =>{



          alert('Successfully Login!');
  
          this.route.navigateByUrl('sidemu/dashboard');
  
        }).catch(err =>{
  
  
          alert(err.message + ' Failed to login');
  
        });


        
   
     

     
    }

    
      }
  ngOnInit() {
    //this.authService.check_Authentication();

      if(this.auth.currentUser != null){
    this.platform = this.plat;
    this.plat.is("mobileweb");

      }else{

        this.route.navigateByUrl('');
      }
  }


  signUp(){

    this.route.navigateByUrl('sign-up/');
  }

}
