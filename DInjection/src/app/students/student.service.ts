import { Injectable } from '@angular/core';
import {  } from './students.component';
import { LoggerService } from '../logger.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private logger: LoggerService) { }
  // getStudent() {
  // this.logger.log('Getting students’);
  //   const students= [];
  //    let student = new Student();
  //    Student.name=‘xyz’;
  //    Student.age=‘15’;
  //    students.push(Student.age);
  //    return students; 
  //   }
    
}
