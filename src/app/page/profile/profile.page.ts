import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { BidService } from 'src/app/service/bid.service';
import { UserService } from 'src/app/service/user.service';
import { UserBankPage } from '../user-bank/user-bank.page';
import { WalletPage } from '../wallet/wallet.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileUser;
  platform;
  client = {} as Client;
  userID;
  bid = {} as Bid;

  constructor(private plat: Platform, private alertCtrl: AlertController, private userDao: UserService, private bidDao: BidService, private modal: ModalController) { 

   

  }

  ngOnInit() {

    
    this.platform = this.plat;


    let userID=  firebase.auth().currentUser.uid;
   this.userDao.getUser(userID).subscribe(data => {

    this.client = data.data() as Client;

    console.log(this.client);
   })
  }

  async presentName() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Name:',
      inputs: [
        {
          name: 'Name',
          type: 'text',
          placeholder: 'Name'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: data => {
          
            this.client.name = data.Name;
            this.userDao.updateUser(this.client).then(() => {

             
            });
          }
        }
      ]
    });

    await alert.present();
  }

  
  async presentSurname() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Surname:',
      inputs: [
        {
          name: 'Surname',
          type: 'text',
          placeholder: 'Surname'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: data => {
            
            this.client.surname = data.Surname;
            this.userDao.updateUser(this.client).then(() => {

             
            });
            
          }
        }
      ]
    });

    await alert.present();
  }


  
  async presentGender() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Gender:',
      inputs: [
        {
          name: 'Gender',
          type: 'text',
          placeholder: 'Gender'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: data => {
            
            this.client.gender = data.Gender;
            this.userDao.updateUser(this.client).then(() => {

             
            });
          }
        }
      ]
    });

    await alert.present();
  }


  
  async presentContact() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Update Contact:',
      inputs: [
        {
          name: 'Contact',
          type: 'text',
          placeholder: 'Contact'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: data=> {
            
            this.client.contact = data.Contact;
            this.userDao.updateUser(this.client).then(() => {

             
            });
          }
        }
      ]
    });

    await alert.present();
  }


  async addBidPresent(){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Add Amount:',
      inputs: [
        {
          name: 'Amount',
          type: 'number',
          placeholder: 'Amount'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: data => {


            this.bid.amount = data.Amount;
            this.bid.auctionerID = "" +this.client.userID;
            this.bid.createDate = new Date();



            if((data.Amount > 0) && (data.Amount <= this.client.amount)) 
            this.bidDao.setBid(this.bid);

              let newAmount = this.client.amount - data.Amount

              this.client.amount = newAmount;
           
              this.userDao.updateUser(this.client).then(() => {


              });

          }
        }
      ]
    });

    await alert.present();

  }


  async addBidAllPresent(){

    if(this.client.amount > 0){  

      this.bid.amount = this.client.amount;
      this.bid.auctionerID = this.client.userID;
      this.bid.createDate = new Date();


    this.bidDao.setBid(this.bid);

      let newAmount = 0;

      this.client.amount = newAmount;
   
      this.userDao.updateUser(this.client).then(() => {


      });

    }

  
           
       
  }

  async presentProfile(client) {
    const modal = await this.modal.create({
      component: UserBankPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        client: this.client
       
      }
    });
    return await modal.present();

  
  }

  async presentWallet(client){

    const modal = await this.modal.create({
      component: WalletPage,
      cssClass: 'my-custom-class',
      componentProps: { 
        client: this.client
       
      }
    });
    return await modal.present();
  }


}
