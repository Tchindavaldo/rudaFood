import { Injectable } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore'; // Assurez-vous que cela est correct
import * as fonction from "./functions/index";
import { DataService } from '../data.service';
import { requeToFastFood } from '../requeToFastFood';
import { requeToUser } from '../requeToUser';

@Injectable({
  providedIn: 'root',
})
export class cmdAdded
{

  private firestore: Firestore;










  
  constructor(private dataServies: DataService, private requeToFastFood:requeToFastFood, private requeToUser:requeToUser) 
  {

      this.firestore = getFirestore(); // Ceci est l'initialisation

  }










async listenForUserChanges()
{

        const menuCollectionRef = collection(this.firestore, 'users');

        onSnapshot(menuCollectionRef, async (snapshot) => 
        {

                  for (const change of snapshot.docChanges()) 
                  {

                            if (change.type === 'added' || change.type === 'modified') 
                            {

                                
                                      if (change.doc.data()) 
                                      {

                                          await fonction.updateFastfoodCmdAfterUserNewCmd(change.doc.data(),this.dataServies,this.requeToFastFood) 

                                      }

                            }

                  };

        });
  
} 



  






async listenForMenuChanges()
{

  const menuCollectionRef = collection(this.firestore, 'fast-food');

  onSnapshot(menuCollectionRef, async (snapshot) => 
  {

                  for (const change of snapshot.docChanges())
                  {

                            if (change.type === 'added' || change.type === 'modified') 
                            {

                                
                                      if (change.doc.data()) 
                                      {

                                          fonction.updateUserdCmdAfterFastFoodNewAction(change.doc.data(),this.dataServies,this.requeToUser) 

                                      }

                            }

                  };

  });
  
} 










}
