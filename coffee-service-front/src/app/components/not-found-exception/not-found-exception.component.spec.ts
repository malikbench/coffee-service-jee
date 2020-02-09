import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundExceptionComponent } from './not-found-exception.component';

describe('NotFoundExceptionComponent', () => {
  let component: NotFoundExceptionComponent;
  let fixture: ComponentFixture<NotFoundExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
