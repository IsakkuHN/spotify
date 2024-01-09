import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: TrackModel[],
    args: string | null = null,
    sort: string = 'asc'
  ): TrackModel[] {
    try {
      if (args === null) {
        return value;
      } else {
        const tempList = value.sort((a: any, b: any) => {
          if (a[args] > b[args]) {
            return 1;
          }
          if (a[args] < b[args]) {
            return -1;
          }
          if (a[args] === b[args]) {
            return 0;
          }
          return 1;
        });
        return sort === 'asc' ? tempList : tempList.reverse();
      }
    } catch (error) {
      console.error(error);
      return value;
    }

    return [];
  }
}
