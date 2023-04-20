# ANGULAR-CRUD

In this project, we will learn to create a **Web Application** based on the **Angular** framework. Also to implement **CRUD** instances in order to manage data in the web app. 

## Project creation

Run `ng new [project-name]` to create a project with a desired name. In this case will be **angular-crud**.

You will be asked if you want to add Angular Routing and to choose a stylesheet format. In this case we **will use Angular Routing** and **CSS** as stylesheet format.

## Project deployment

Run `ng serve --open` in order to **deploy** your web app. The *--open* parameter means that once the project is compiled, it will open automatically on your default browser.

You can stop the process using the key combination `Ctrl + C`.

## Adding Angular Materials

Run `ng add @angular/material` to add **[Angular Material](https://material.angular.io/components/categories)**, a **user interface library**, to your project.

You will be asked for a **prebuilt theme** name, we will use **Indigo/Pink**, also if you want to use **Angular Material typography styles** and **Angular animations modules**, in this case we will use them.

## Creating a new component

Run `ng generate component [compent-name]` to create a component which will contain an app feature. In this case we will create a *student* compenent.

## Importing Material Modules

In order to use Material, you must import their proper modules. For example we will import toolbar, button and icon modules. On the file `app.module.ts` add the following code in the header.

```typescript
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
```

Also add those modules inside **`@NgModule`**, so your code will look like this:

```typescript
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And the HTML code inside **`student.component.html`**:

```html
<!--Toolbar-->
<p>
  <mat-toolbar color="primary">
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>Angular CRUD</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
      <mat-icon>share</mat-icon>
    </button>
  </mat-toolbar>
</p>
```

## Adding Paths to the Routing

Adding paths to the routing helps to access to diferent components adding its path in your browser. For example, `http://localhost:4200/students` can be achieved adding the following code to your **`app-routing.module.ts`**:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Removing the default template

In order to see your previous coded toolbar, you will need to remove the default template in the `app.component.html` file. Leaving only a line with:

```html
<router-outlet></router-outlet>
```

## Adding a table

Add an [Angular Material Table](https://material.angular.io/components/table/overview) as learned before. Also import the paginator:

```typescript
import { MatPaginatorModule } from '@angular/material/paginator';
```

You may encounter some syntax errors from your IDE, thats because you will need some variables as parameters for your table. You define these variables in the `student.component.ts` file:

```typescript
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
```

## Adding styles to your web app

After testing your changes, you may see some visual glitches in your web app. The reason is that you need to add styles to your html components. If you know *CSS*, you can fix it yourself. If not, you can use this in your `student.component.ts` file:

```css
.mat-toolbar {
  display: flex;
  justify-content: left;
  align-items: center;
}

.example-spacer {
  flex: 1 1 auto;
}

.exaple-icon {
  margin-left: 8px;
  margin-right: 8px;
}

table {
  width: 100%;
}
```

## Creating an Interface

Run `ng generate interface models/student --type=model` this will generate an *interface* named *student* with type *model* in the folder *models*.

If you don't know the difference between a class and an interface, I quote a definition

>A class is a blueprint from which we can create objects that share the same configuration - properties and methods. An interface is a group of related properties and methods that describe an object, but neither provides implementation nor initialisation for them.

After running the generation, you will find the `student.model.ts` file inside the *.\models* folder. In this file you will define your interface:

```typescript
export interface Student {
  id: any;
  name: any;
  age: any;
  mobile: any;
  email: any;
  address: any;
}
```

## HTML Adaptation

Now we will adapt the HTML table with the variables of the interface.

`student.component.html`

```html
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef>ID.</th>
    <td mat-cell *matCellDef="let element">{{ element.id }}</td>
  </ng-container>

  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef>Nombre</th>
    <td mat-cell *matCellDef="let element">{{ element.name }}</td>
  </ng-container>

  <ng-container matColumnDef="age">
    <th mat-header-cell *matHeaderCellDef>Edad</th>
    <td mat-cell *matCellDef="let element">{{ element.age }}</td>
  </ng-container>

  <ng-container matColumnDef="mobile">
    <th mat-header-cell *matHeaderCellDef>Celular</th>
    <td mat-cell *matCellDef="let element">{{ element.mobile }}</td>
  </ng-container>

  <ng-container matColumnDef="email">
    <th mat-header-cell *matHeaderCellDef>Email</th>
    <td mat-cell *matCellDef="let element">{{ element.email }}</td>
  </ng-container>

  <ng-container matColumnDef="address">
    <th mat-header-cell *matHeaderCellDef>Domicilio</th>
    <td mat-cell *matCellDef="let element">{{ element.address }}</td>
  </ng-container>

  <ng-container matColumnDef="actions">
    <th mat-header-cell *matHeaderCellDef>Actions</th>
    <td mat-cell *matCellDef="let element">
      <a mat-raised-button color="accent" (click)="editItem(element)">
        <mat-icon>Edit</mat-icon>
      </a>
      <a mat-raised-button color="warn" (click)="deleteItem(element.id)">
        <mat-icon>Delete</mat-icon>
      </a>
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
</table>
```

## ViewChild of Paginator and Sort

We will add a ViewChild for the MatPaginator and the MatSort. Acording to Angular documentation:

>Property decorator that configures a view query. The change detector looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated.

So your `student.component.ts` will look like this:

```typescript
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
```

## Implementing a form

In order to create a form you need to import the modules of forms and input.

`app.module.ts`

```typescript
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
```

`student.component.html`

```html
<form (summit)="onSummit()" #studentForm="ngForm">
  <mat-form-field>
    <input
      type="text"
      matInput
      placeholder="Nombre"
      name="name"
      required
      [(ngModel)]="studentData.name"
    />
  </mat-form-field>
  <mat-form-field>
    <input
      type="text"
      matInput
      placeholder="Edad"
      name="age"
      required
      [(ngModel)]="studentData.age"
    />
  </mat-form-field>
  <mat-form-field>
    <input
      type="text"
      matInput
      placeholder="Celular"
      name="mobile"
      required
      [(ngModel)]="studentData.mobile"
    />
  </mat-form-field>
  <mat-form-field>
    <input
      type="text"
      matInput
      placeholder="Email"
      name="email"
      required
      [(ngModel)]="studentData.email"
    />
  </mat-form-field>
  <mat-form-field>
    <input
      type="text"
      matInput
      placeholder="Domicilio"
      name="address"
      required
      [(ngModel)]="studentData.address"
    />
  </mat-form-field>
  <ng-container *ngIf="isEditMode; else elseTemplate">
    <button mat-button color="primary">Update</button> &nbsp;
    <button mat-button color="warn" (click)="cancelEdit()">Cancel</button>
    &nbsp;
  </ng-container>
  <ng-template #elseTemplate>
    <button mat-button color="primary">Add</button> &nbsp;
  </ng-template>
</form>
```

`student.component.ts`
```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/student.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @ViewChild('studentForm', { static: false })
  studentForm!: NgForm;

  studentData!: Student;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'mobile', 'email', 'address', 'actions']

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort)
  sort!: MatSort;

  cancelEdit(){
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  onSummit(){
    if(this.studentForm.form.valid){
      console.log('Valid');
      if(this.isEditMode){
        console.log('Update');
        //this.updateStudent();
      }
      else{
        console.log('Create');
        //this.addStudent();
      }
      this.cancelEdit();
    }
    else{
      console.log('Invalid data');
    }
  }
}
```

## Generating a Service

Run `ng generate service services/http-data` to generate a *service* called *http-data* in the *services* folder.

>Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

>Services are a great way to share information among classes that don't know each other.

Also you will need to import the *HTTP Cliente Module* in `app.module.ts`

```typescript
import { HttpClientModule } from '@angular/common/http';
```

## Installing JSON-Server

Run `npm install -g json-server` to install a server that will act as a data base based on a JSON file.

Also create a **data.json** inside the *assets* folder.

## Running JSON-Server

Before running your json server you may add some data to your **data.json**, here is an example:

```json
{
  "students": [
    {
      "id": 1,
      "name": "Alvaro",
      "age": 21,
      "mobile": 987654321,
      "email": "alvaro@upc.edu.pe",
      "address": "Peru"
    }
  ]
}
```

Then run `json-server --watch data.json`
