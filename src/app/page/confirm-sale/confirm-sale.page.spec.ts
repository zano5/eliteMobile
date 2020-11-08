import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmSalePage } from './confirm-sale.page';

describe('ConfirmSalePage', () => {
  let component: ConfirmSalePage;
  let fixture: ComponentFixture<ConfirmSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
