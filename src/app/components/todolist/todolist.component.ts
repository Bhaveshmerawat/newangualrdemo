import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Service
import { FirebaseService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist: any;
  transfer: any[] = [];
  selectedList: any;

  constructor(public fireService: FirebaseService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dataList();
  }
  // Get List Function
  dataList() {
    const dbRef = firebase.database().ref('todo/');
    dbRef.on('value', (snapshot: any) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        snapshot.forEach((child: any) => {
          this.transfer.push({
            id: child.key,
            ...child.val()
          });
          this.todolist = this.transfer
        });
        return this.todolist
        // console.log('snapshot here', this.todolist);
      } else {
        console.log("No data available");
      }
    });
  }
  // Get Select list value Function
  onSelectList(list: any): void {
    this.selectedList = list;
  }
  // Edit Modal function
  editOpenModal(editmodal: any) {
    this.modalService.open(editmodal);
  }
  // Delete Modal function
  deleteOpenModal(delteItemModal: any) {
    this.modalService.open(delteItemModal);
  }
  // Update on Firebase database
  getSelectVal(status: string, uId: any) {
    firebase.database().ref('todo/' + uId).update({
      status: status
    }, (error) => {
      if (error) {
        alert("Status not updated")
      } else {
        alert("Status updated successfully")
      }
    });
  }
  // Delete Items into Database
  deleteItem(uId: any) {
    firebase.database().ref('todo/' + uId).remove().then(() => {
      alert("Document successfully deleted!");
    }).catch((error) => {
      alert("Error removing document: ");
    });
  }
}
