import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../students/student.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StudentService],
})
export class StdModuleModule { }
