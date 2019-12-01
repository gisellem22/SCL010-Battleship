import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  // user:any = {
  //   user1: null,
  //   user2: null
  // }

  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    // this.users = userService.user;
    // console.log(this.users)
  }

  ngOnInit() {
    this.onAuthStateChange();
    this.userService.getUser().subscribe(user => {
      console.log("Base de Datos - ROOM", user)
    })
  }

  login(choise) {
    console.log("hola")
    this.afAuth.auth.signInAnonymously()
      .then(anonymous => {
        console.log("Anónimo", anonymous.user.uid)
        this.user = JSON.parse(JSON.stringify(new User(anonymous.user.uid, null)));
        if (choise === "start") {
          // this.user.user1= anonymous.user.uid;
          console.log(this.user)
          this.sendUser1(this.user)
        } else if (choise === "join") {
          this.sendUser2(anonymous.user.uid)
        }

      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR", errorCode, errorMessage)
        // ...
      });
  };

  onAuthStateChange() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log("USER is signed IN", user)
      } else {
        console.log("User is signed out")
      }
    });
  };

  sendUser1(user: User) {
    this.userService.addUser1(user);
  }

  sendUser2(user: string) {
    this.userService.addUser2(user)
  }

}
