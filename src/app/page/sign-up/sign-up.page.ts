import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import * as firebase from 'firebase';

import { UserService } from 'src/app/service/user.service';

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

  constructor(fb: FormBuilder, private loginDoa: LoginService, private router: Router, private userDao: UserService,  private route: ActivatedRoute) {
   
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
      password:['', [Validators.required]]
      
   
     
    })

  


  }

  form: FormGroup
  submitted = false
  error = ''

  ngOnInit() {

    this.getUserByUserID(this.id);

    
  }

  valid(field) {
    if (!this.submitted) {
      return true
    }

    return this.form.get(field).valid
  }

  submit() {
    this.submitted = true
    this.error = ''
    
  
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
  
              console.log(this.form.value.bankAccount);
              this.client.email = this.form.value.email;
              this.client.username = this.form.value.username;
              this.client.bankAccount = parseInt(this.form.value.bankAccount);
              this.client.bankName = this.form.value.bankName;
              this.client.referredBy = this.username;
           this.client.userID = firebase.auth().currentUser.uid.toString();
           //this.client.userID = 'nK1Mj8gaqCcNGejl7cOyVOjUkny1';
                this.userDao.updateUser(this.client).then(() => {
  
  
                  this.router.navigateByUrl('sidemu/dashboard');
                })
        
                  
                
      
      
      
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


  getUsernameCheck(username){

  

  }
}
