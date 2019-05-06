import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIndexComponent } from './person-index.component';

describe('PersonIndexComponent', () => {
  let component: PersonIndexComponent;
  let fixture: ComponentFixture<PersonIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
