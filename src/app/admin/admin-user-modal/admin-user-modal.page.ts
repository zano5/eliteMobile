import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-user-modal',
  templateUrl: './admin-user-modal.page.html',
  styleUrls: ['./admin-user-modal.page.scss'],
})
export class AdminUserModalPage implements OnInit {

  user;
  constructor(private modal: ModalController, private userDao: UserService, private router: Router) { }

  ngOnInit() {

    console.log(`${this.user.name}`);
  }

  close(){

    this.modal.dismiss();
  }


  updateUser(){


    this.userDao.updateUser(this.user);
  }


  goToPendingShares(){

    this.router.navigate(['admin-pending-shares'], {queryParams: {key:  this.user.key}});
  
    this.modal.dismiss();

  }

}
