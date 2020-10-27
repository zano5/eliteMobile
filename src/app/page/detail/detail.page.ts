import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goAmount1(){

    this.router.navigate(['bid-filter'], {queryParams: {amount: 5000  }})

  }

  goAmount2(){

    
    this.router.navigate(['bid-filter'], {queryParams: {amount: 10000  }})
  }


  goAmount3(){

    
    this.router.navigate(['bid-filter'], {queryParams: {amount: 15000  }})

  }

}
