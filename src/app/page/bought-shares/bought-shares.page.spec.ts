import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoughtSharesPage } from './bought-shares.page';

describe('BoughtSharesPage', () => {
  let component: BoughtSharesPage;
  let fixture: ComponentFixture<BoughtSharesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtSharesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoughtSharesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
