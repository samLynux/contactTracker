import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import {Storage} from '@ionic/storage';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  infoWindow: any;
  @ViewChild('map', {read: ElementRef, static: false}) 
  mapRef: ElementRef;
  umnPos: any = {
    lat: -6.256081,
    lng: 106.619755
  };

  constructor(
      private storage: Storage,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.initMap(this.umnPos);
  }

  initMap(pos: any){
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const opstions = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, opstions);

    
    this.infoWindow = new google.maps.InfoWindow({
      content: 'Click the map to get Location',
      position: this.umnPos,
    });

    this.infoWindow.open(this.map);

    
    this.map.addListener('click', (mapsMouseEvent) => {

      
      this.infoWindow.close();

      
      this.infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });

      this.infoWindow.setContent(
          JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );

      
      const maps = JSON.stringify(mapsMouseEvent.latLng.toJSON()).split('"');
      const newMaps =
          {
            lat: maps[2].substring(1, maps[2].length - 1),
            lng: maps[4].substring(1, maps[4].length - 1),
          };
      this.storage.set('coordinate', newMaps.lat + ', ' + newMaps.lng);


      this.infoWindow.open(this.map);
    });
  }

}
