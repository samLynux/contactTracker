import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Student2PageRoutingModule } from './student2-routing.module';

import { Student2Page } from './student2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Student2PageRoutingModule
  ],
  declarations: [Student2Page]
})
export class Student2PageModule {}
