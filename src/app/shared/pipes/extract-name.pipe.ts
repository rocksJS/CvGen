/* eslint-disable no-prototype-builtins */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractName',
  standalone: true,
})
export class ExtractNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value) && value.length && value[0].hasOwnProperty('name')) {
      return value
        .slice(0, 3)
        .map((item) => item.name)
        .join(', ');
    }
    return value;
  }
}
