import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidemuPage } from './sidemu.page';

describe('SidemuPage', () => {
  let component: SidemuPage;
  let fixture: ComponentFixture<SidemuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidemuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
