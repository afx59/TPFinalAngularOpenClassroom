import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'tp1-blog-oc';
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB6wrS68QnjYRaPBIWU7r81dsuqWcwe9tA",
      authDomain: "tp-final-angular-oc.firebaseapp.com",
      databaseURL: "https://tp-final-angular-oc.firebaseio.com",
      projectId: "tp-final-angular-oc",
      storageBucket: "tp-final-angular-oc.appspot.com",
      messagingSenderId: "992950706839"
    };
    firebase.initializeApp(config);
  }
}
