import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEng: unknown, ...args: unknown[]): unknown {
    if (!dataEng) {
      return '';
    }
    const dataEngString = dataEng as string;
    const dataArr = dataEngString.split('-');

    if (dataArr.length !== 3) {
      return dataEng;
    }

    return dataArr[2].concat('/').concat(dataArr[1]).concat('/').concat(dataArr[0]);
  }

}
