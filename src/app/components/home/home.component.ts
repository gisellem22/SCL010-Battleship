import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  user:any = {};
  
  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    // this.users = userService.user;
    // console.log(this.users)
   }

  ngOnInit() {
    this.onAuthStateChange();
    this.userService.getUser().subscribe(user => {
      console.log(user)
    })
  }

  login() {
    console.log("hola")
    this.afAuth.auth.signInAnonymously()
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("ERROR",errorCode, errorMessage)
      // ...
    });
    this.sendUser(this.user)
  };
  
  onAuthStateChange() {
    this.afAuth.auth.onAuthStateChanged(user => {
      console.log(user)
      console.log("ID USUARIO",user.uid)
      this.user.userId = user.uid;
      console.log(this.user)
      // if (user) {
        // User is signed in.
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // ...
        // console.log(isAnonymous,uid)
      // } else {
        // User is signed out.
        // ...
      // }
      // ...
    })
  };
sendUser(user) {
this.userService.addUser(user);
  }

}
