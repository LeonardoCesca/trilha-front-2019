import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infoFilter'
})
export class InfoFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
