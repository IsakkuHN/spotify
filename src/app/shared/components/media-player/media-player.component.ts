import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover:
      'https://i0.wp.com/edmjoy.com/wp-content/uploads/3052fa49-7a5a-1f3e-57b6-cf778c50300a.jpg?w=1200&ssl=1',
    name: 'BEBE (Oficial)',
    album: 'Gioli & Assi',
    url: 'http://localhost:3000/track.mp3',
    _id: 1,
  };
}
