import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
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
    addUser (user:any) {
      this.userCollection.add(user);
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
