import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: 'Eduardo Islas', country: 'ARG' },
    { id: 2, name: 'María Ángeles Cruz', country: 'COL' },
    { id: 3, name: 'Mario Marcelini', country: 'ARG' },
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    if (this.selectedEmployee === employee) {
      this.selectedEmployee = new Employee();
    } else {
      this.selectedEmployee = employee;
    }
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  delete() {
    if (confirm('¿Estás seguro que deseas eliminar este empleado?')) {
      this.employeeArray = this.employeeArray.filter(
        (x) => x != this.selectedEmployee
      );
      this.selectedEmployee = new Employee();
    }
  }
}
