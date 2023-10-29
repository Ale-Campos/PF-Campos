import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AlumnsModule } from './pages/alumns/alumns.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    AlumnsModule,
    CoursesModule,
    RouterModule,
    MatListModule,
    UsersModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
