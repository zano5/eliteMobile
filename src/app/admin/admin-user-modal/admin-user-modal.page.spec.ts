import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminUserModalPage } from './admin-user-modal.page';

describe('AdminUserModalPage', () => {
  let component: AdminUserModalPage;
  let fixture: ComponentFixture<AdminUserModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUserModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
