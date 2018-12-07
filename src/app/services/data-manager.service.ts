import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';
@Injectable()
export class DataManagerService {
  private artist_url1 = "http://itunes.apple.com/search?term=jack&limit=4";
  constructor(private http:Http) { }
  public pushUserData(body){
    console.log("Pushing...");
  }
  fetchArtists(name,limit) {
    return this.http.get(this.artist_url1);
  }
  getArtistDetails(artistname) {
    return this.http.get('http://itunes.apple.com/search?term='+artistname+'&limit=1')
  }
}