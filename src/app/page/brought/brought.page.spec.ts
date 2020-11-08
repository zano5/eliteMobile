import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroughtPage } from './brought.page';

describe('BroughtPage', () => {
  let component: BroughtPage;
  let fixture: ComponentFixture<BroughtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroughtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroughtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
