import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-incentive-wallet',
  templateUrl: './incentive-wallet.page.html',
  styleUrls: ['./incentive-wallet.page.scss'],
})
export class IncentiveWalletPage implements OnInit {

totalIncentiveAmount;


  constructor(private userDao: UserService) { }

  ngOnInit() {
  }

}
