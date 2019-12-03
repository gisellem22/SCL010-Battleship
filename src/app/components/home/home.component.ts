
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserService } from '../../services/user.service';
import { Room } from '../../models/room';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  rooms: Room[];

  constructor(public afAuth: AngularFireAuth, public userService: UserService) { }

  ngOnInit() {
    //llamado del observador del AUTH
    this.onAuthStateChange();
    //Muestra los documentos(rooms) que hay en la colección ROOM (base de datos)
    this.userService.getUser().subscribe(rooms => {
      this.rooms = rooms;
      console.log("Base de Datos - ROOM", this.rooms)
    })
  };

  //metodo para logear jugador de modo anónimo (asíncrono|promesa)
  signIn() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInAnonymously()
        .then(anonymous => {
          console.log("Anónimo", anonymous.user.uid)
          let userId: string = (anonymous.user.uid);
          resolve(userId);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("ERROR", errorCode, errorMessage)
          reject(errorMessage)
          // ...
        })
    });
  };

  //metodo del observador AUTH
  onAuthStateChange() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log("USER is signed IN", user)
      } else {
        console.log("User is signed out")
      }
    });
  };
  //metodo que da id al user1 y crea la sala
  createRoom() {
    this.signIn()
      .then(userId => {
        let user = userId as string;
        console.log(user, this.rooms)
        if (this.rooms.length == 0) {
        this.userService.addUser1(user);
        console.log(user)
        } else {
          this.userService.addUser2(user)
        }
      })
  };

  //metodo que dá id al user2 y lo agrega a la sala
  // joinRoom(room: Room) {
  //   this.signIn()
  //     .then(userId => {
  //       let user2 = userId as string;
  //       this.userService.addUser2(user2)
  //       console.log(user2)
  //     })
  // };

  //metodo que borra la sala
  // deleteRoom(room: Room) {
  //   this.userService.deleteRoom(room)
  // };

}
