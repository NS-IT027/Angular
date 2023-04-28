import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdTOinr'
})
export class UsdTOinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {

    const [x] = args;    
    // return null;
    return value*x;
  }

}
