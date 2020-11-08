import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserBankPage } from './user-bank.page';

describe('UserBankPage', () => {
  let component: UserBankPage;
  let fixture: ComponentFixture<UserBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
