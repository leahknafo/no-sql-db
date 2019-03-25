import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'add-student', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
