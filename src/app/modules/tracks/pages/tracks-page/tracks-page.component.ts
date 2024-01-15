import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../../app/data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  trendingTracks: Array<TrackModel> = [];
  shuffleTracks: Array<TrackModel> = [];

  listOfObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.listOfObservers$;
  }

  ngOnDestroy(): void {
    this.listOfObservers$.forEach((observer) => observer.unsubscribe());
  }
}
