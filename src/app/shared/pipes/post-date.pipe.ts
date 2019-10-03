import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postDate'
})
export class PostDatePipe implements PipeTransform {

  transform(dateString: string): any {
    const date = new Date(dateString);
    return dateString && isNaN.call(null, date) && String(date) !== 'Invalid Date' ?
      date.toLocaleDateString('pl-pl', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) : '';
  }

}
