import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidemu',
  templateUrl: './sidemu.page.html',
  styleUrls: ['./sidemu.page.scss'],
})
export class SidemuPage implements OnInit {


  pages: Array<{title: string, icon:string, page: string}>;

  constructor(private router: Router, private menu: MenuController, private platform: Platform, private loginDao: LoginService) { 

  

    this.pages = [



      { title: 'sidemu/dashboard',icon: 'home', page: 'Dashboard' },
      { title: 'sidemu/detail',icon: 'card', page: 'Shares For Sales' },
      { title: 'sidemu/bought-shares',icon: 'cash', page: 'Bought Shares' },
      { title: 'sidemu/sold-shares',icon: 'cash', page: 'Sold Shares' },
      { title: 'sidemu/pending-shares',icon: 'cash', page: 'Pending Shares'},
      { title: 'sidemu/notifications',icon: 'card', page: 'Notifications'},
      { title: 'sidemu/table',icon: 'book', page: 'Table' },
      { title: 'sidemu/referrals',icon: 'person', page: 'Referrals' },
      { title: 'sidemu/terms',icon: 'book', page: 'Terms & Conditons'},
    

    
     
  
  
    ];
  }

  ngOnInit() {

  //  if(this.platform.is('desktop')){

  //   this.menu.open();
  //  }
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
this.router.navigateByUrl(page.title);
  }

  signOut(){

    this.loginDao.signOut().then(() => {

      this.router.navigateByUrl('');
      this.router.navigateByUrl('');
    })

  }

}
