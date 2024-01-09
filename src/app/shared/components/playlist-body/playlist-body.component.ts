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
  optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };

    console.log(this.optionSort);
  }
}
