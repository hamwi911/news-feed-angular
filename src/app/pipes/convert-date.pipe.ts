import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return new Date(value).toLocaleDateString('en-US', {month: 'long', year: 'numeric', day: 'numeric'});
  }

}
