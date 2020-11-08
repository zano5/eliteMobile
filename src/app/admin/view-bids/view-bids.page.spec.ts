import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBidsPage } from './view-bids.page';

describe('ViewBidsPage', () => {
  let component: ViewBidsPage;
  let fixture: ComponentFixture<ViewBidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
