import {HttpErrorResponse} from '@angular/common/http';

export interface FormContainer {
  model?: any;
  fieldErrors?: { [key: string]: string[] };
  isWorking?: boolean;
  handleError?: (err: HttpErrorResponse) => boolean;
}

