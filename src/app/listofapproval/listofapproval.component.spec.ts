import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofapprovalComponent } from './listofapproval.component';

describe('ListofapprovalComponent', () => {
  let component: ListofapprovalComponent;
  let fixture: ComponentFixture<ListofapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
