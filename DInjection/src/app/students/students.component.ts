import { Component } from '@angular/core';
import { StudentService } from './student.service'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent {

}
