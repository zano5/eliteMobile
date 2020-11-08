import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncentiveWalletPage } from './incentive-wallet.page';

describe('IncentiveWalletPage', () => {
  let component: IncentiveWalletPage;
  let fixture: ComponentFixture<IncentiveWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentiveWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncentiveWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
