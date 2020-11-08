import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminShareAllocationPage } from './admin-share-allocation.page';

describe('AdminShareAllocationPage', () => {
  let component: AdminShareAllocationPage;
  let fixture: ComponentFixture<AdminShareAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminShareAllocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminShareAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
