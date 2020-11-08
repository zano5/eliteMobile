import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccouncementsPage } from './accouncements.page';

describe('AccouncementsPage', () => {
  let component: AccouncementsPage;
  let fixture: ComponentFixture<AccouncementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccouncementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
