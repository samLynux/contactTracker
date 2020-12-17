import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Student1PageRoutingModule } from './student1-routing.module';

import { Student1Page } from './student1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Student1PageRoutingModule
  ],
  declarations: [Student1Page]
})
export class Student1PageModule {}
