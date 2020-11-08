import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferralsPage } from './referrals.page';

describe('ReferralsPage', () => {
  let component: ReferralsPage;
  let fixture: ComponentFixture<ReferralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
