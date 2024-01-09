import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css'],
})
export class PlaylistBodyComponent implements OnInit {
  tracks: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }
}
