import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'mobile', 'email', 'address', 'actions']
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  sort!: MatSort;
}
