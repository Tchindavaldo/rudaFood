import { DocumentData } from "@angular/fire/compat/firestore";
import { DataService } from "../../data.service";
import { Commande } from "src/app/data/commande";
import { requeToFastFood } from "../../requeToFastFood"; 
import { FastFood } from "src/app/data/fastFood";
import { requeToUser } from "../../requeToUser";
import { Users } from "src/app/data/Users";

export async function updateUserdCmdAfterFastFoodNewAction(FastfoodGet: any, dataServies: DataService, requeteToUser: requeToUser) {

    const Fastfood = FastfoodGet.FastFood;
    let FastFoodCmd: Commande[] = Fastfood.commandeFastFood;











    if (Fastfood.proprietaire.infos.uid === dataServies.user.infos.uid) 
       {

              if (Fastfood.commandeFastFood === undefined)
              {

                     dataServies.FastFood.commande = [];
                     console.log('Le tableau de commande du fastfood a été mis à jour localement', dataServies.FastFood);   

              }

       }











    // Utiliser la commande du user pour effectuer des mises à jour
    let updateNeeded = false;

    for (const userCmd of dataServies.user.cmd)
       {
              FastFoodCmd.forEach(fastFoodCmd => 
              {

                     // Vérifiez les commandes du fastfood pour voir si elles doivent être mises à jour
                     if (fastFoodCmd.uidUser === userCmd.uidUser && fastFoodCmd.idCmd === userCmd.idCmd 
                     && fastFoodCmd.staut === 'isPendingToFastFood' && userCmd.staut !== 'IsWaitingActionFromFastFood') {


                     // Mettre à jour le statut de la commande de l'utilisateur
                     userCmd.staut = 'IsWaitingActionFromFastFood';
                     console.log('Commande mise à jour :', userCmd);


                     // Indique qu'une mise à jour est nécessaire
                     updateNeeded = true;
                     }

              });
       }











    // Si une mise à jour est nécessaire, mettez à jour l'utilisateur
    if (updateNeeded)       
       {
                     
              console.log('Valeur des commandes de l\'utilisateur avant l\'update', dataServies.user.cmd); 


              const userUpdate = await requeteToUser.updateCmdUser(dataServies.user, dataServies.idxUser.toString());
              console.log('Valeur des commandes de l\'utilisateur après l\'update', userUpdate!.cmd);

       } else
       {

              console.log('Aucune commande n\'a été mise à jour.');

       }
}
