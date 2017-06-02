import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ObjectLoopPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'objectLoop',
})
export class ObjectLoopPipe implements PipeTransform {

  transform(value: string) {
    return Object.keys(value || {}).map((item) => {
      return value[item];
    });
  }
}
