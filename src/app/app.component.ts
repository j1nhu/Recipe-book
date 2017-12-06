import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
  	firebase.initializeApp({
  		apiKey: "AIzaSyClAA4gu9tKO5oEUM6fPl2KpmDYiC5tRgI",
    	authDomain: "angular-http-63608.firebaseapp.com"
  	})
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
