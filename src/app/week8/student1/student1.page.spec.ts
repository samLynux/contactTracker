import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Student1Page } from './student1.page';

describe('Student1Page', () => {
  let component: Student1Page;
  let fixture: ComponentFixture<Student1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Student1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
