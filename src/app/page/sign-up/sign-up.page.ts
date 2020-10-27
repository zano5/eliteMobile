import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  client = {} as Client;

  constructor(fb: FormBuilder, private loginDoa: LoginService, private router: Router, private userDao: UserService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  form: FormGroup
  submitted = false
  error = ''

  ngOnInit() {
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

      console.log('test');
     
      if(this.form.value.password === this.form.value.confirmPassword){


        this.loginDoa.createEmailPassword(this.form.value.email, this.form.value.password).then(data => {



          this.loginDoa.login(this.form.value.email, this.form.value.password).then(() =>{


            this.client.email = this.form.value.email;
            this.client.password = this.form.value.password;

            
          this.userDao.createUser(this.client, data.user.uid).then(() =>{
      
            alert('Successfully Registered ' + this.client.email);
            
            this.router.navigateByUrl('');
          })

          })

       





        }).catch(err => {


          alert(err.message + ' Error! Unable To Register');

        })


      }else{


        alert('Passwords Do Not Match!');
      }
      
    
    }
  }
}
