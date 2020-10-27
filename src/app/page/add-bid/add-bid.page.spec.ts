import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBidPage } from './add-bid.page';

describe('AddBidPage', () => {
  let component: AddBidPage;
  let fixture: ComponentFixture<AddBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
