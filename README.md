# NgFirebaseFileUpload

NgFirebaseFileUpload is an angular library which provides out of the box 
functionality for uploading files with firebase.

## Dependencies

<a href="https://angular.io" rel="nofollow">Angular</a>
  (Tested with angular 4+)
  
<a href="https://www.npmjs.com/package/firebase" rel="nofollow">firebase</a> 
  (Tested with Version 5.5.7)
  
  
## Prerequisites
Hopefully you should have already et up angular and firebase on your 
application before seeking out this functionality. Just in case you have
not, please 

- Set up angular <a href="https://angular.io/guide/quickstart">here</a> 
- Set up firebase <a href="https://www.npmjs.com/package/firebase">here</a>

  
## Installation

Run the following npm command.

`npm install --save ng-firebase-file-upload`

Once installed you need to import the module where it is needed.

`NB: The AppModule is used as an example. But note that this could be any module`

```
import {NgFirebaseFileUploadModule} from 'ng-firebase-file-upload';

@NgModule({
  ...
  imports: [
    NgFirebaseFileUploadModule,
    ...
  ],
  ...
})
export class AppModule { }
```

## Usage

This is a custom file input so can be used as such.

For example in a reactive form with a `FormControl` called `avatar`, we can use it as such:

`<ng-firebase-file-upload formControlName="avatar"></ng-firebase-file-upload>`

For example in a template driven form with an `avatar` attribute, we can use it as such:

`<ng-firebase-file-upload [(ngModel)]="avatar"></ng-firebase-file-upload>`

 
