/* eslint-disable no-prototype-builtins */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractName',
  standalone: true,
})
export class ExtractListNamesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value) && value.length && value[0].hasOwnProperty('name')) {
      return value
        .slice(0, 3)
        .map((item) => item.name)
        .join(', ');
    } else if (typeof value === 'object') {
      return value.name;
    }
    return value;
  }
}
