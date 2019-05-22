import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFirebaseFileUploadComponent } from './ng-firebase-file-upload.component';

describe('NgFirebaseFileUploadComponent', () => {
  let component: NgFirebaseFileUploadComponent;
  let fixture: ComponentFixture<NgFirebaseFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFirebaseFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFirebaseFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
