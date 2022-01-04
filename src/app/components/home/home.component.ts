import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'firebase/database';
// SERVICE
import { FirebaseService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoform!: FormGroup;

  constructor(
    public fireService: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.todoForm();
  }
  // Todo From
  todoForm() {
    this.todoform = new FormGroup({
      'title': new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.todoform.valid) {
      this.fireService.createTodoList(this.todoform.value);
      // console.log(this.todoform.value)
    } else {
      alert("Please fill all fields")
    }
  }
}
