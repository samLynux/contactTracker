import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Student3Page } from './student3.page';

describe('Student3Page', () => {
  let component: Student3Page;
  let fixture: ComponentFixture<Student3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Student3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
