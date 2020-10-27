import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.page.html',
  styleUrls: ['./admin-sign-in.page.scss'],
})
export class AdminSignInPage implements OnInit {


  form: FormGroup;
  submitted = false;
  error = '';

  constructor(fb: FormBuilder, private loginDao: LoginService, private router: Router) {


    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });


   }




  ngOnInit(){
   
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
      console.log(this.form.value);


      let mail =this.form.value.email;
      let password = this.form.value.password;
      this.loginDao.login(mail, password).then(() => {



        alert('Successfully Login!');

        this.router.navigateByUrl('admin-users');

      }).catch(err =>{


        alert(err.message + ' Failed to login');

      });

    }
  }


  }


