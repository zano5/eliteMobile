import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoldSharesPage } from './sold-shares.page';

describe('SoldSharesPage', () => {
  let component: SoldSharesPage;
  let fixture: ComponentFixture<SoldSharesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldSharesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoldSharesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
