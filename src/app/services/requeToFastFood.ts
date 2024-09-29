import { FastFood } from './../data/fastFood';
import { dataMerchend } from '../data/dataMerchend';
import { Injectable } from '@angular/core';
import { Menu } from '../data/menu';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { Users } from '../data/Users';
import { UsersInfos } from '../data/UsersInfos';
import { Commande, boisson,  embalage, livraison } from '../data/commande';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root',
})
export class requeToFastFood {
  constructor(private dataGet :DataService) {}
  
  async addFastFoodToFirestore(FastFoodGet: FastFood,idx:string): Promise<FastFood|null> {
    const firestore = getFirestore();
let fastFoodToReturn:FastFood|null=null
    // const nbreTotalDeFastFood = doc(firestore, 'fast-fodd', 'nombre total de fast food');
    
    const usersCollection = doc(firestore, 'fast-food', idx);

    try {
      const FastFood: any = await this.convertFastFoodToJsonArray(FastFoodGet);

      // Ajouter le tableau JSON à la base de données
      await setDoc(usersCollection, { FastFood });

      console.log('FastFood added to Firestore successfully');
      fastFoodToReturn = FastFoodGet
      return fastFoodToReturn
    } catch (error) {
      console.log(error);
      throw error;
    }
  }










  async addCmdToFastFood(cmdToAdd: Commande[],idxFastFood:string): Promise<FastFood|null>
  {

    var fastfoodToReturn:FastFood|null = null
     
    
	 try {
    
		const FastFoodGet = await this.getFastFoodFromFirestore(idxFastFood);

		if (FastFoodGet != null) 
		{

		      cmdToAdd.forEach((tempCmdToAdd)=>
		      {

			     FastFoodGet.commande.push(tempCmdToAdd);

		      })
		      
		      fastfoodToReturn =  await this.addFastFoodToFirestore(FastFoodGet, idxFastFood);
		      console.log('ajout réussi de la commande du client au fastfood concerner');
		  
		} else 
		{

		      console.log('FastFoodGet is null');

		}
				 
      
	 } catch (error) 
	 {
	   
		throw error;
    
	 }            
			   
	 return fastfoodToReturn
     
  }
  
   









  async getFastFoodFromFirestore(idx:string): Promise<FastFood|null> {
    const firestore = getFirestore();
    const usersCollection = doc(firestore, 'fast-food', idx);
  
    try {
      const docSnapshot = await getDoc(usersCollection);
  
      if (docSnapshot.exists()) {
	 const data = docSnapshot.data();
	 if (data && data['FastFood']) {
	   const fastFoodArray = await this.convertJsonToFastFood(data['FastFood']);
	   return fastFoodArray;
	 } else {
	   console.log('Le document ne contient pas le champ attendu.');
	   return null;  // Retourne null si le champ attendu n'est pas trouvé
	 }
      } else {
	 console.log("Le document n'existe pas.");
	 return null;  // Retourne null si le document n'existe pas
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  









  getFastFoodCorespond()
  {
	 try 
	 {

		this.dataGet.FastFoodTab.forEach
		(

		      TempFastFood =>
		      {

			     if (this.dataGet.user.isMarchand && 
				  TempFastFood.proprietaire.infos.uid == this.dataGet.user.infos.uid &&
				  TempFastFood.proprietaire.infos.email == this.dataGet.user.infos.email)
			     {

				    this.dataGet.FastFood = TempFastFood
				    console.log('fast trouverrrrrrrrrrrrrrrrrr',this.dataGet.FastFood);
				    console.log('gerant de daftfood trouver fast ajouterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
		  
			     } 
			     
		      }

		)

	 } catch (error)
	 {

	   console.log(error);
	   
	 }
  }










  async convertFastFoodToJsonArray(FastFood: FastFood): Promise<any> {
    const jsonArray = {
      id: FastFood.id,
      nom: FastFood.nom,
      proprietaire: {
	 infos:{

	 nom: FastFood.proprietaire.infos.nom,
	 prenom: FastFood.proprietaire.infos.prenom,
	 age: FastFood.proprietaire.infos.age,
	 numero: FastFood.proprietaire.infos.numero,
	 uid: FastFood.proprietaire.infos.uid,
	 email: FastFood.proprietaire.infos.email,
	 password: FastFood.proprietaire.infos.password,
	 },
	 isMarchand: FastFood.proprietaire.isMarchand,
	 statistique: FastFood.statistique,
	 commande:FastFood.proprietaire.cmd.map((item) => ({
	   uidUser: item.uidUser,
	   idCmd: item.idCmd,
	   idFastFood: item.idFastFood,
	   menu: {
	     titre: item.menu.titre,
	     prix1: item.menu.prix1,
	     prix2: item.menu.prix2,
	     prix3: item.menu.prix3,
	 
	     optionPrix1: item.menu.optionPrix1,
	     optionPrix2: item.menu.optionPrix2,
	     optionPrix3: item.menu.optionPrix3,
    
	     
	     image: item.menu.image,
	     disponibilite: item.menu.disponibilite,
	   },
	   quantite: item.quantite,

	   embalage: item.embalage.map((item)=>({
	     type : item.type,
	     prix : item.prix,
	   })),

	    
	    

	   boisson: {
	     type: item.boisson.type,
	     prix: item.boisson.prix
	   },

	   livraison: {
	     statut: item.livraison.statut,
	     prix: item.livraison.prix
	   },

	   prixTotal: item.prixTotal,
	   staut: item.staut,
	   isBuy: item.isBuy,
	   ispending: item.ispending
	 })),

      },
      menu: FastFood.menu.map((item) => ({
	 titre: item.titre,
	 prix1: item.prix1,
	 prix2: item.prix2,
	 prix3: item.prix3,
	 
	 optionPrix1: item.optionPrix1,
	 optionPrix2: item.optionPrix2,
	 optionPrix3: item.optionPrix3,

	 
	 image: item.image,
	 disponibilite: item.disponibilite,
      })),
      commandeFastFood:FastFood.commande.map((item) => ({
	 uidUser: item.uidUser,
	 idCmd: item.idCmd,
	 idFastFood: item.idFastFood,
	 menu: {
	   titre: item.menu.titre,
	   prix1: item.menu.prix1,
	   prix2: item.menu.prix2,
	   prix3: item.menu.prix3,
      
	   optionPrix1: item.menu.optionPrix1,
	   optionPrix2: item.menu.optionPrix2,
	   optionPrix3: item.menu.optionPrix3,
  
	   
	   image: item.menu.image,
	   disponibilite: item.menu.disponibilite,
	 },
	 quantite: item.quantite,

	 embalage: item.embalage.map((item)=>({
	   type : item.type,
	   prix : item.prix,
	 })),

	  
	  

	 boisson: {
	   type: item.boisson.type,
	   prix: item.boisson.prix
	 },

	 livraison: {
	   statut: item.livraison.statut,
	   prix: item.livraison.prix
	 },

	 prixTotal: item.prixTotal,
	 staut: item.staut,
	 isBuy: item.isBuy,
	 ispending: item.ispending
      })),
      statistique: FastFood.statistique,
    };
    return jsonArray;
  }
  
  async convertJsonToFastFood(jsonArray: any): Promise<FastFood> {
    // Créer l'objet Users
    const infos = new UsersInfos(
      jsonArray.proprietaire.infos.nom,
      jsonArray.proprietaire.infos.prenom,
      jsonArray.proprietaire.infos.age,
      jsonArray.proprietaire.infos.numero,
      jsonArray.proprietaire.infos.uid,
      jsonArray.proprietaire.infos.email,
      jsonArray.proprietaire.infos.password,
    );
   
  
  
    const commande: Commande[] = jsonArray.proprietaire.commande.map((item: any) => new Commande(
      item.uidUser,
      item.idCmd,
      item.idFastFood,
      new Menu(
	 item.menu.titre,
	 item.menu.prix1,
	 item.menu.prix2,
	 item.menu.prix3,
	 
	 item.menu.optionPrix1,
	 item.menu.optionPrix2,
	 item.menu.optionPrix3,

	 
	 item.menu.image,

	 item.menu.disponibilite
      ),
      item.quantite,
      item.embalage.map((item: any) => new embalage(
	 item.type,
	 item.prix,
      )),
      new boisson(
	 item.boisson.type,
	 item.boisson.prix,
      ),
      new livraison(
	 item.livraison.statut,
	 item.livraison.prix,
      ),
      item.prixTotal,
      item.staut,
      item.isBuy,
      item.ispending
    ));


    
    const proprietaire = new Users(
      infos,
      jsonArray.proprietaire.isMarchand,
      jsonArray.proprietaire.statistique,
      commande,
    );
  
    // Créer les éléments du menu
    const menu: Menu[] = jsonArray.menu.map((item: any) => new Menu(
      item.titre,
      item.prix1,
      item.prix2,
      item.prix3,
      
      item.optionPrix1,
      item.optionPrix2,
      item.optionPrix3,

      
      item.image,
      item.disponibilite
    ));  
   
    const commandeFastFood: Commande[] = jsonArray.commandeFastFood.map((item: any) => new Commande(
      item.uidUser,
      item.idCmd,
      item.idFastFood,
      new Menu(
	 item.menu.titre,
	 item.menu.prix1,
	 item.menu.prix2,
	 item.menu.prix3,
	 
	 item.menu.optionPrix1,
	 item.menu.optionPrix2,
	 item.menu.optionPrix3,

	 
	 item.menu.image,

	 item.menu.disponibilite
      ),
      item.quantite,
      item.embalage.map((item: any) => new embalage(
	 item.type,
	 item.prix,
      )),
      new boisson(
	 item.boisson.type,
	 item.boisson.prix,
      ),
      new livraison(
	 item.livraison.statut,
	 item.livraison.prix,
      ),
      item.prixTotal,
      item.staut,
      item.isBuy,
      item.ispending
    ));

    // Créer l'objet FastFood
    const fastFood = new FastFood(
      jsonArray.id,
      jsonArray.nom,
      proprietaire,
      menu,
      commandeFastFood,
      jsonArray.statistique
    );
  
    return fastFood;
  }
  
  
}
