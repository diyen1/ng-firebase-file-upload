import {Component, forwardRef, Input, OnInit, SecurityContext} from '@angular/core';
import * as firebase from 'firebase';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'ng-firebase-file-upload',
  templateUrl: './ng-firebase-file-upload.component.html',
  styleUrls: ['./ng-firebase-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgFirebaseFileUploadComponent),
      multi: true,
    },
  ],
})
export class NgFirebaseFileUploadComponent implements OnInit, ControlValueAccessor {

  percentage = 0;
  @Input() pathFolder = 'service';
  @Input() isRequired = false;
  @Input() fieldCount = 5;

  form: FormGroup;
  onChange;
  onTouched;
  value = '';
  fileField;
  downloadURL;
  backgroundImage;
  fileToUploadId = 'file-to-upload-' + uuid();
  loading = false;
  validateFn: any = () => {};

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.fileField = new FormControl(
      this.value, [
        //
      ],
    );

    if (this.isRequired) {
      this.fileField.setValidators([Validators.required]);
    } else {
      this.fileField.setValidators([]);
    }

    this.form = new FormGroup({
      fileField: this.fileField,
    });
  }

  uploadFile(file) {

    this.loading = true;

    this.percentage = 0;

    // get file
    const file1 = file.files[0];

    // create storage ref
    const storageRef = firebase.storage().ref(this.pathFolder + '/' + file1.name);

    // Upload file
    const task = storageRef.put(file1);

    // Upload progress bar
    task.on('state_changed',
      (snapshot: any) => {
        this.percentage = (task.snapshot.bytesTransferred / task.snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      },
      () => {
        storageRef.getDownloadURL().then((downloadURL) => {
            // this.value = downloadURL;
            this.downloadURL = downloadURL;
            this.backgroundImage = (this.downloadURL && this.downloadURL != null && this.downloadURL !== '')
              ? this.domSanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.downloadURL + ')')
              : this.domSanitizer.sanitize(SecurityContext.STYLE, 'none');
            this.onChange(downloadURL);
            this.loading = false;
          },
          (error) => {
            console.error('upload rejected', error);
            this.loading = false;
          });
      }
    );
  }

  writeValue(value) {
    if (value === '') {
      value = '';
    }
    this.value = value;
    this.downloadURL = value;
    this.backgroundImage = (this.downloadURL && this.downloadURL != null && this.downloadURL !== '')
      ? this.domSanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.downloadURL + ')')
      : this.domSanitizer.sanitize(SecurityContext.STYLE, 'none');
    this.form.get('fileField').setValue(this.value);
  }

  validate(c: FormControl) {
    return this.isRequired ? Validators.required : null;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

}
