import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angualrNewApp';

  ngOnInit() {
  //  console.log(firebase.database());
  }
}
