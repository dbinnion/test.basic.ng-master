// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })

import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { GoogleMapsModule } from '@angular/google-maps'

// declare const google: string;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    // private renderer2: Renderer2
    ) { }

  ngOnInit(): void {
    // const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCNBnqjEulPSb67G1fDY_mgSCDxqa3gJwI';
    // this.loadScript(url).then(() => this.initMap());
  }

  // private initMap() {
  //   const map = new google.maps.Map(document.getElementById('map'),    {zoom: 1, center: {lat: 0, lng: 0});
  // }

  // private loadScript(url: string) {
  //   return new Promise((resolve, reject) => {
  //     const script = this.renderer2.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = url;
  //     script.text = ``;
  //     script.async = true;
  //     script.defer = true;
  //     script.onload = resolve;
  //     script.onerror = reject;
  //     this.renderer2.appendChild(this.document.body, script);
  //   })
  // }
}
