import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as dataRaw from '../../../../data/tracks.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URI = environment.api;

  constructor(private httpClient: HttpClient) {}

  private skipById(
    listTracks: TrackModel[],
    id: number
  ): Promise<TrackModel[]> {
    return new Promise<TrackModel[]>((resolve, reject) => {
      const tempList = listTracks.filter((a) => a._id !== id);
      resolve(tempList);
    });
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URI}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URI}/tracks13`).pipe(
      mergeMap(({ data }: any) => {
        return this.skipById(data, 1);
      }),
      catchError((error) => {
        console.error('Something bad happended...', error);
        return of([]);
      })
    );
  }
}
