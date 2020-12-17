import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Student3PageRoutingModule } from './student3-routing.module';

import { Student3Page } from './student3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Student3PageRoutingModule
  ],
  declarations: [Student3Page]
})
export class Student3PageModule {}
