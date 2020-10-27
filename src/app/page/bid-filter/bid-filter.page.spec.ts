import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidFilterPage } from './bid-filter.page';

describe('BidFilterPage', () => {
  let component: BidFilterPage;
  let fixture: ComponentFixture<BidFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
