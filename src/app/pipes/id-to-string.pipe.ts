import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idToString'
})
export class IdToStringPipe implements PipeTransform {

  transform(value: number, ): string {

    let myId: string = `Ref_${value}`

    return myId ;
  }

}
