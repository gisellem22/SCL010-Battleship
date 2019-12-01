import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<any>;
  user: Observable<any[]>;
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
  addUser1(user: User) {
    this.userCollection.add(user);
  };
  roomId() {
    console.log("add user 2")
    return new Promise ((resolve, reject) => {
    this.userCollection.ref.where("user2", "==", null)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log("holaaaaaaaaaaaaaa", doc.id, " => ", doc.data());
          resolve([doc.id, doc.data()])
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    })
  };
  addUser2(user2:string) {
    this.roomId()
    .then(a => {
      let room= JSON.parse(JSON.stringify(a));
      console.log("respuesta promesa",room);
      let roomId = room[0];
      let user1 = room[1].user1;
      if (user1 === user2) {
        console.log("ESPERE JUGADOR 2")
      } else {
        this.userCollection.doc(roomId).set(JSON.parse(JSON.stringify(new User(user1, user2))));
      }
  });
};

  // getUser() {
  //   this.user = this.userCollection.snapshotChanges().pipe(map(actions => {
  //     return actions.map(a=> {
  //       const data = a.payload.doc.data() as any;
  //       data.id = a.payload.doc.id;
  //       return data;
  //     })
  //   }))
  //    return this.user;
  //  };
  //  addUser (user: any) {
  //   this.userCollection.add(user)
  // };


}
