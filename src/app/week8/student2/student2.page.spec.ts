import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Student2Page } from './student2.page';

describe('Student2Page', () => {
  let component: Student2Page;
  let fixture: ComponentFixture<Student2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Student2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
