import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { AppRoutingModule, routingcomponents } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
        ],
  declarations: [ AppComponent, routingcomponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
