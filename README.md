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

## Ading styles to your web app

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


