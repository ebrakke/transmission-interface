import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar';
import { TorrentListComponent } from './torrent-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToolbarComponent, TorrentListComponent]
})
export class AppComponent {
  title: string = 'app works!';
}
