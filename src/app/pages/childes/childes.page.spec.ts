import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildesPage } from './childes.page';

describe('ChildesPage', () => {
  let component: ChildesPage;
  let fixture: ComponentFixture<ChildesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
