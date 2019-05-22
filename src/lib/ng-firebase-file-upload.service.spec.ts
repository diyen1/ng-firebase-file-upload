import { TestBed } from '@angular/core/testing';

import { NgFirebaseFileUploadService } from './ng-firebase-file-upload.service';

describe('NgFirebaseFileUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFirebaseFileUploadService = TestBed.get(NgFirebaseFileUploadService);
    expect(service).toBeTruthy();
  });
});
