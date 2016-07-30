import { Component, OnInit, Input } from '@angular/core';
import { TorrentModel } from './torrent.model';

@Component({
  moduleId: module.id,
  selector: 'app-torrent-list-item',
  templateUrl: 'torrent-list-item.component.html',
  styleUrls: ['torrent-list-item.component.css']
})
export class TorrentListItemComponent implements OnInit {
  @Input()
  torrent: TorrentModel;
  
  constructor() {}

  ngOnInit() {
    
  }

}
