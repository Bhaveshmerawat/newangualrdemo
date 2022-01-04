import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private router: Router,
  ) { }

  // Create todo list on firebase database
  createTodoList(title: any) {
    firebase.database().ref('todo/').push().set({
      title: title.title,
      status: 'Not Active',
    }, (error) => {
      if (error) {
        alert("Title not created")
      } else {
        // console.log(title)
        alert("Title saved successfully!")
        this.router.navigateByUrl('/todolist');
      }
    });
  }

}
