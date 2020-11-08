import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPendingShareesPage } from './admin-pending-sharees.page';

describe('AdminPendingShareesPage', () => {
  let component: AdminPendingShareesPage;
  let fixture: ComponentFixture<AdminPendingShareesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingShareesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPendingShareesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
