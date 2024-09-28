import { Injectable } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore'; // Assurez-vous que cela est correct

@Injectable({
  providedIn: 'root',
})
export class cmdAdded {
  private firestore: Firestore;

  constructor() {
    this.firestore = getFirestore(); // Ceci est l'initialisation
  }

  listenForMenuChanges() {
    const menuCollectionRef = collection(this.firestore, 'fast-food');

    onSnapshot(menuCollectionRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added' || change.type === 'modified') {
          console.log('Document modifié ou ajouté : ', change.doc.data());
          console.log('callBack get ', change.doc);
        }
      });
    });
  }
}
