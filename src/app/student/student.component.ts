import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'mobile', 'email', 'address', 'actions']
}
