import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMonthYear'
})
export class CustomMonthYearPipe implements PipeTransform {
  transform(value: any, locale?: string): string | null {

    const formatter = new Intl.DateTimeFormat(locale || 'pt-BR', {
      month: 'short'
    });
    const month = formatter.format(value).toUpperCase();
    return `${month} ${value.getFullYear()}`;
  }
}