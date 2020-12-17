import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { MahasiswaService } from '../week9/mahasiswa.service';
import { map } from "rxjs/operators"; 
import { LoadingController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  contacts:any;
  map: any;
  infoWindow: any = new google.maps.InfoWindow();
  moreWindows:any = new google.maps.InfoWindow();
  isLoading = false;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  umnPos: any = {
    lat: -6.256081,
    lng: 106.618755
  };

  constructor(
    private mhsSrv: MahasiswaService,
    private loadCtrl:LoadingController) { }

  ngOnInit() {
    this.mhsSrv.getAll().snapshotChanges().pipe(
      map(changes=>
        changes.map(c =>({key: c.payload.key, ...c.payload.val()})))
      
    ).subscribe(
      data =>
      {
        this.contacts = data;

        
      }
    );
    if(navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((position: Position) => {
        this.umnPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        
        
      });
    }
    
  }

  ionViewDidEnter(){
    this.ngOnInit();
    this.showMap(this.umnPos);
    this.showCurrentLoc();
  }

  showCurrentLoc(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Yout Current Location');  
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);

        
        
      });
    }
  }

 

  showMap(pos: any){
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 13,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    if(this.contacts != null)
    {
      for(var x=0;x<this.contacts.length;x++)
        {
          const evenMoreWindows:any = new google.maps.InfoWindow();
          
          
          
          const newPos = {
            lat: parseFloat(this.contacts[x].location.substring(0,this.contacts[x].location.indexOf(','))),
            lng: parseFloat(this.contacts[x].location.substring(this.contacts[x].location.indexOf(',')+1))
          };
          evenMoreWindows.setPosition(newPos);
          evenMoreWindows.setContent(this.contacts[x].nama);  
          evenMoreWindows.open(this.map);
          
          
        }
        
        
    }
    else
    {
      this.present();
    }
    
  }

  async present() {
    this.isLoading = true;
    return await this.loadCtrl.create({
       duration: 500,
    }).then(a => {
      a.present().then(() => {
        
        this.ionViewDidEnter();
        
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadCtrl.dismiss().then(() => console.log('dismissed'));
  }
}
