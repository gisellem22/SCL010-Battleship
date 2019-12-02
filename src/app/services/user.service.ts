import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<any>;
  user: Observable<Room[]>;
  userDoc: AngularFirestoreDocument<any>;

  constructor(public db: AngularFirestore) {
    this.userCollection = this.db.collection("room");
    this.user = this.userCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getUser() {
    return this.user;
  };
  addUser1(user: string) {
    let room = JSON.parse(JSON.stringify(new Room(user,"")));
    this.userCollection.add(room);
  };

  roomId(user:string) {
    console.log("add user 2")
    return new Promise((resolve, reject) => {
      this.userCollection.ref.where("user2", "==","")
        .get()
        .then(querySnapshot => {
          if(querySnapshot.empty) {
            console.log("holii")
            this.addUser1(user)
          }else {
            querySnapshot.forEach(doc =>{
              // doc.data() is never undefined for query doc snapshots
              console.log("holaaaaaaaaaaaaaa", doc.id, " => ", doc.data());
              resolve([doc.id, doc.data()])
            });
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
          reject(error)
        });
    })
  };
  addUser2(user2:string) {
   this.roomId(user2)
   .then(roomArray => {
    let room = JSON.parse(JSON.stringify(roomArray));
    if (room[1].user1 === user2) {
      console.log("Espere JUGADOR")
          // this.userCollection.doc(room[0]).update(JSON.parse(JSON.stringify(new Room(room[1].user1, null, "Espere JUGADOR2"))));
        } else {
          this.userCollection.doc(room[0]).update(JSON.parse(JSON.stringify(new Room(room[1].user1, user2))));
        }
   })
  };
  
  // addUser2(user2: string, room: Room) {
  //   if (room.user1 === user2) {
  //     this.userCollection.doc(room.id).update(JSON.parse(JSON.stringify(new Room(room.user1, null, "Espere JUGADOR2"))));
  //   } else {
  //     this.userCollection.doc(room.id).update(JSON.parse(JSON.stringify(new Room(room.user1, user2))));
  //   }
  // };
  // deleteRoom(room: Room) {
  //   this.userCollection.doc(room.id).delete();
  // };
}

// roomId() {
  //   console.log("add user 2")
  //   return new Promise((resolve, reject) => {
  //     this.userCollection.ref.where("user2", "==", null)
  //       .get()
  //       .then(querySnapshot => {
  //         querySnapshot.forEach(function (doc) {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log("holaaaaaaaaaaaaaa", doc.id, " => ", doc.data());
  //           resolve([doc.id, doc.data()])
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log("Error getting documents: ", error);
  //       });
  //   })
  // };