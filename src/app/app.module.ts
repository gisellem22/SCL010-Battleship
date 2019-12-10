import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserService } from './services/user.service';
import { BoardComponent } from './components/board/board.component';
import { EnemyBoardComponent } from './components/enemy-board/enemy-board.component';
import { EnemySquareComponent } from './components/enemy-square/enemy-square.component';
import { SquareComponent } from './components/square/square.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SquareComponent,
    BoardComponent,
    EnemyBoardComponent,
    EnemySquareComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
