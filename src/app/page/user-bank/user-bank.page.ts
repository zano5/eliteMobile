import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-bank',
  templateUrl: './user-bank.page.html',
  styleUrls: ['./user-bank.page.scss'],
})
export class UserBankPage implements OnInit {

  client;

  constructor(private userDao: UserService, private modal: ModalController) { }

  ngOnInit() {
  }


  update(){

    this.userDao.updateUser(this.client);


  }


  close(){


    this.modal.dismiss();
  }



}
