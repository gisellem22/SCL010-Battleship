import { TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[HomeComponent,PageNotFoundComponent],
    imports: [
      FormsModule,
      AppRoutingModule, AngularFireAuthModule, AngularFirestoreModule],
  
    providers: [UserService ]
    
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
