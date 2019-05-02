import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoComponent } from './doggo.component';

describe('DoggoComponent', () => {
  let component: DoggoComponent;
  let fixture: ComponentFixture<DoggoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
