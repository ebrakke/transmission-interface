import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TorrentModel } from './torrent-list-item/'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TorrentService {
  private apiUrl = 'http://localhost:3000';
  
  constructor(private http: Http) {}
  
  getTorrents(filter: string): Promise<TorrentModel[]> {
    let req;
    if (!filter) {
      req = this.http.get(`${this.apiUrl}/torrents/all`).toPromise()
    } else {
      req = this.http.get(`${this.apiUrl}/torrents/${filter}`).toPromise();
    }
    
    return req.then( response => response.json().torrents as TorrentModel[])
  }
}
