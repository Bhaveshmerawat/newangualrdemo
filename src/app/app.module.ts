import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp } from 'firebase/app';
// firebase
// import { AngularFireMessagingModule } from '@angular/fire/messaging';
 import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
 import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    NgbModule,
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
