import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  constructor() {}

  getAllTracks$(): Observable {}
}
