import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNgIfComponent } from './sub-ng-if.component';

describe('SubNgIfComponent', () => {
  let component: SubNgIfComponent;
  let fixture: ComponentFixture<SubNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubNgIfComponent]
    });
    fixture = TestBed.createComponent(SubNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
