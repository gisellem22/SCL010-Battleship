import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,PageNotFoundComponent ],
      imports: [FormsModule,AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule, AngularFirestoreModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should get the id of the user',() =>{
    expect(component.signIn).toBeTruthy();
  }); 

  it ('should observe state of user',() =>{
    expect(component.onAuthStateChange).toBeTruthy();
  }); 

  it ('should get the id of user and send it to room',() =>{
    expect(component.createRoom).toBeTruthy();
  });

});
