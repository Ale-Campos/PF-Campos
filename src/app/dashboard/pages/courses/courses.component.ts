import { Component } from '@angular/core';
import { Course } from 'src/data/Courses';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService,
    private matDialog: MatDialog,
    private router: Router
    ) {
    this.courses$ = this.coursesService.getCourses$();
  }
  columns = ['id', 'name', 'startDate', 'endDate', 'actions'];

  courseCreate(): void {
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (value) => {
        if(value) {
          let newId = new Date().getTime().toString();
          this.courses$ = this.coursesService.createCoruse$({
            id: newId,
            name: value.name,
            startDate: value.startDate,
            endDate: value.endDate
          });
        }
      }
    });
  }

  courseDetail(courseId: string):void {
    this.router.navigate(['dashboard', 'courses','details', courseId]);
  }

  courseEdit(course: Course): void {
    this.matDialog.open(CoursesDialogComponent, {
      data: course
    }).afterClosed().subscribe({
      next: (values) => {
       
        if(values) {
          
          this.courses$ = this.coursesService.editCoruse$(course.id, values);
        }
      }
    })
  }

  courseDelete(courseId: string): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId);
  }


}
