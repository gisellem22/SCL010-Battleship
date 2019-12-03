import { TestBed, async } from '@angular/core/testing';
<<<<<<< Updated upstream
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
=======
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { UserService } from 'src/app/services/user.service'
>>>>>>> Stashed changes


describe('AppComponent', () => {
  beforeEach(async(() => {
<<<<<<< Updated upstream
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,HomeComponent,PageNotFoundComponent
      ],
      imports:[AppRoutingModule,FormsModule],
      providers: [{provide:UserService}],
=======
    TestBed.configureTestingModule({ imports:[FormsModule, AppRoutingModule], 
      declarations: [HomeComponent,PageNotFoundComponent,AppComponent],
    providers: [ UserService],
>>>>>>> Stashed changes
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SCL10-BATTLESHIP'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SCL10-BATTLESHIP');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Battleship');
  });
});
