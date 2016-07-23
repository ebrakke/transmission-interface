import { Component, OnInit } from '@angular/core';
import { TorrentListItemComponent } from '../torrent-list-item';
import { TorrentModel } from '../torrent-list-item';

@Component({
  moduleId: module.id,
  selector: 'app-torrent-list',
  templateUrl: 'torrent-list.component.html',
  styleUrls: ['torrent-list.component.css'],
  directives: [TorrentListItemComponent]
})
export class TorrentListComponent implements OnInit {
  torrents: TorrentModel[] = [
    new TorrentModel,
    new TorrentModel
  ];
  
  constructor() {}

  ngOnInit() { }

}
