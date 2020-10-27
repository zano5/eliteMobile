import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeBidPage } from './make-bid.page';

describe('MakeBidPage', () => {
  let component: MakeBidPage;
  let fixture: ComponentFixture<MakeBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
