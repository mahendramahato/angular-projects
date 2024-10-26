import { Component } from '@angular/core';
import { employee } from './employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  showEdit:boolean = false;

  allEmployees:employee[] = [
    {
      employeeId: 100,
      firstName: 'Max',
      lastName: 'Payne',
      salary: 1000,
      dob: new Date(3, 1, 1998),
      email: 'max@gmail.com',
    }
  ];

  selectedEmployees:employee | null = null;

  EditEmp(emp:employee){
    this.showEdit=true;
    
    console.log(emp);

    this.selectedEmployees= { ... emp}

  }

  UpdateEmp(updatedEmp: employee) {
    this.showEdit=false;

    this.allEmployees[0]= updatedEmp;

  }

}
