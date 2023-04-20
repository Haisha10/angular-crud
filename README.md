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

In order to use Material, you must import their proper modules. For example we will import toolbar and icon modules. On the file `app.module.ts` add the following code in the header.

```typescript
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```


