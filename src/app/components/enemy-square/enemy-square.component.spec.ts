import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemySquareComponent } from './enemy-square.component';

describe('EnemySquareComponent', () => {
  let component: EnemySquareComponent;
  let fixture: ComponentFixture<EnemySquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemySquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemySquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
