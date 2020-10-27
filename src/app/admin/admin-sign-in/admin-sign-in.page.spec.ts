import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSignInPage } from './admin-sign-in.page';

describe('AdminSignInPage', () => {
  let component: AdminSignInPage;
  let fixture: ComponentFixture<AdminSignInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
