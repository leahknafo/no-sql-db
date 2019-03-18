import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  student;
  studentModel: Student;

  constructor(private angularFirestore: AngularFirestore) {
    this.studentModel = <Student>{}
  }

  ngOnInit(): void {
    this.angularFirestore.collection('student').valueChanges().subscribe(res => {
      this.student = res
    })
  }

  add() {
    this.angularFirestore.collection('student').doc(this.studentModel.name).set({
      name: this.studentModel.name
    })
  }
}