import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFormComponent } from './ng-for-form.component';

describe('NgForFormComponent', () => {
  let component: NgForFormComponent;
  let fixture: ComponentFixture<NgForFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForFormComponent]
    });
    fixture = TestBed.createComponent(NgForFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
