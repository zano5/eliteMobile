import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNotifications(){

    this.router.navigateByUrl('sidemu/notifications')
  }

  
  goProfile(){


    this.router.navigateByUrl('profile');
  }


}
