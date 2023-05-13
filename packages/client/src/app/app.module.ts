import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { TodosComponent } from './todos/todos.component';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxMessageModule } from '@aposin/ng-aquila/message';
import { RouterModule } from '@angular/router';
import { TaskInputComponent } from './task-input/task-input.component';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner'
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox'
import { NxIconModule } from '@aposin/ng-aquila/icon'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TodosComponent,
    TaskInputComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxHeaderModule,
    NxLinkModule,
    NxCardModule,
    NxGridModule,
    NxFormfieldModule,
    NxInputModule,
    NxButtonModule,
    NxMessageModule,
    RouterModule,
    NxSpinnerModule,
    NxCheckboxModule, 
    NxIconModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
