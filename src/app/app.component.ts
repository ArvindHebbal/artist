import { Component } from '@angular/core';
import { DataManagerService } from './services/data-manager.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataManagerService]
})
export class AppComponent {
  title = 'app';
  artists = [];
  name = '';
  limit;
  errorMessage = '';
  selectedArtist = <any>{};
  constructor(private service: DataManagerService) {
  }
  searchArtists() {
    document.getElementById("overlay").style.display = "block";
  }
  fetchArtists() {
    
  }
  submitArtists(){
    if(this.name == 'Jack' && this.limit == 4)
    {
      this.service.fetchArtists(this.name,this.limit)
    .subscribe(response => {
      this.artists = response.json()['results'];
      console.log('artist', this.artists[0]['artistName']);
      this.fetchTabData(this.artists[0]['artistName']);
      document.getElementById("overlay").style.display = "none";
    })
    }
    else
    this.errorMessage = '*Invalide artist name or track';
}
fetchTabData(artistName){
  this.service.getArtistDetails(artistName)
  .subscribe(response => {
    this.selectedArtist = response.json()['results'][0]
    console.log(this.selectedArtist)
  })
}
}
