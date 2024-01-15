import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrendings$: Observable<TrackModel[]> = of([]);

  datashuffleTracks$: Observable<any> = of([]);

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrendings$ = of(data);

    this.datashuffleTracks$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 60,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: 'http://',
        cover:
          'https://akamai.sscdn.co/uploadfile/letras/fotos/f/2/8/8/f28893d1d7f27c22764f28b32375960e.jpg',
      };

      setTimeout(() => {
        observer.next([trackExample]);
      }, 3500);
    });
  }
}
