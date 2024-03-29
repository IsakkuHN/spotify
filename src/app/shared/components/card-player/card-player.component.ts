import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'big' | 'small' = 'small';
  @Input() track: TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: '',
  };
  status = true;

  constructor(private multimediaService: MultimediaService) {}
  ngOnInit(): void {}

  sendPlay(track: TrackModel): void {
    this.multimediaService.callBack.emit(track);
  }
}
