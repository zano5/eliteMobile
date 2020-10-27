import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
    private route :Router, private loginDao: LoginService) {
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
    // this.submitted = true;
    this.error = '';
   
    if (this.form.valid) {
      
    //   this.loginService.login(this.form.value['email'], this.form.value['password']).then(() => {
    //     console.log('Success');
    //   }).catch(err => {
    //     console.log(err);
    //     this.error = err.message;
    //   })
    let mail =this.form.value.email;
    let password = this.form.value.password;
   
     // this.authService.signIn(mail,password);
      console.log(mail);
      console.log(password);


      this.loginDao.login(mail,password).then(() =>{



        alert('Successfully Login!');

        this.route.navigateByUrl('sidemu/detail');

      }).catch(err =>{


        alert(err.message + ' Failed to login');

      });

     
    }

    
      }
  ngOnInit() {
    //this.authService.check_Authentication();
  }


  signUp(){

    this.route.navigateByUrl('sign-up');
  }

}
