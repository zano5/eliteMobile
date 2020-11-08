import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingSharesPage } from './pending-shares.page';

describe('PendingSharesPage', () => {
  let component: PendingSharesPage;
  let fixture: ComponentFixture<PendingSharesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSharesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingSharesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
