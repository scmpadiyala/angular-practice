/*
 * modules ==> Firebase
 *  Step 1 :  Install package npm install firebase @angular/fire --save
 *  Step 2 : Import modules ==>
 *       import { AngularFireModule } from "@angular/fire";
 *       import { AngularFireDatabaseModule } from "@angular/fire/database";
 *
 *  Step 3:  import module and establish connection
 *       AngularFireModule.initializeApp(DBConfig.config),
 *       AngularFireDatabaseModule,
 *
 */
export class DBConfig {
  static config = {
    apiKey: "AIzaSyAcrZpZ6luBFnVh6ZLbBTg6JaMoB83BpAU",
    authDomain: "sample-703db.firebaseapp.com",
    databaseURL: "https://sample-703db.firebaseio.com",
    projectId: "sample-703db",
    storageBucket: "sample-703db.appspot.com",
    messagingSenderId: "795700886936"
  };
}
