import { Pipe, PipeTransform } from '@angular/core';
import { IProjectRequest } from '../interfaces/project.interface';
import { IStrapiRequest } from '../interfaces/request.interface';
import { IRequestData } from '../interfaces/shared/data.interface';

@Pipe({
  name: 'extractNames',
  standalone: true,
})
export class ExtractNamesPipe implements PipeTransform {
  transform(value: IRequestData[]): string[] {
    if (!value) {
      return [];
    }

    return value.map((item: any) => item);
  }
}
