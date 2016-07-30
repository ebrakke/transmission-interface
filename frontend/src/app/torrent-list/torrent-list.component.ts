import { Component, OnInit } from '@angular/core';
import { TorrentListItemComponent } from '../torrent-list-item';
import { TorrentService} from '../torrent.service';
import { TorrentModel } from '../torrent-list-item';

@Component({
  moduleId: module.id,
  selector: 'app-torrent-list',
  templateUrl: 'torrent-list.component.html',
  styleUrls: ['torrent-list.component.css'],
  providers: [TorrentService],
  directives: [TorrentListItemComponent]
})
export class TorrentListComponent implements OnInit {
  torrents: TorrentModel[];
  
  constructor(private torrentService: TorrentService) {}

  ngOnInit() {
    this.torrentService.getTorrents('all')
      .then((torrents) => { this.torrents = torrents; })
  }

}
