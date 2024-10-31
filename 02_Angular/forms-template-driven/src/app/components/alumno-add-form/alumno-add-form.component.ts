import { Component } from '@angular/core';
import { StudentDto } from '../../models/student.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css',
})
export class AlumnoAddFormComponent {
  courseList = ['1º DAM', '2º DAM', '1º AYF', '2º AYF'];
  student = new StudentDto('', '', 18, '');
  submitted = false;

  constructor() {}

  addStudent() {
    console.log(this.student);
    this.submitted = true;
  }
}
