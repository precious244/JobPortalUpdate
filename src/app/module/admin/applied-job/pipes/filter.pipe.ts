import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(applyStatus: Array<any>, search: string): any {
    if (applyStatus && search)
      return applyStatus.filter((d) => d.applicationStatus.indexOf(search) > -1
        || d.id == search);
    return applyStatus;
  }

}
