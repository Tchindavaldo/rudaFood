import { DocumentData } from "@angular/fire/compat/firestore";
import { DataService } from "../../data.service";
import { Commande } from "src/app/data/commande";
import { requeToFastFood } from "../../requeToFastFood"; 
import { FastFood } from "src/app/data/fastFood";

export async function updateFastfoodCmdAfterUserNewCmd(userGet: any,dataServies:DataService,requeteToFasFood:requeToFastFood)
{




       
       const user = userGet.user




















       if (user.infos.uid === dataServies.user.infos.uid )
       {

              if (user.commande.length === 0 )
              {

                     dataServies.user.cmd = []
                     // console.log('valeur du tableau de commande de l\'utilisateur mis a jour localement');   
                     
                     
              }
              
       }









       


















if (dataServies.user.isMarchand) 
{
    let cmdTab: Commande[] = [];
    let fastFoodUpdate: FastFood | null;
    let fastfoodCmdTab = dataServies.FastFood.commande;

//     console.log('COMMANDE DE L\'UTILISATEUR APRES AJOUT DE COMMANDES', user.commande);

    // Si le tableau de commande du fast-food est vide
    if (fastfoodCmdTab.length === 0) 
    {
       //  console.log('Tableau local de commandes de fast-food vide');
        // Ajouter directement toutes les commandes de l'utilisateur
        fastFoodUpdate = await requeteToFasFood.addCmdToFastFood(user.commande, dataServies.FastFood.id.toString());
        compareAndAssign(fastFoodUpdate, fastfoodCmdTab);
       //  console.log('Ajout direct ', fastFoodUpdate);
    } 
    else 
    {
        // Vérification pour chaque commande utilisateur si elle doit être ajoutée
        for (const userCmd of user.commande) 
        {
            if (userCmd.idFastFood === dataServies.FastFood.id && userCmd.staut === 'isPendingToFastFood') 
            {
                // Vérifier si la commande est déjà présente dans fastfoodCmdTab
                const cmdAlreadyInFastFoodTab = fastfoodCmdTab.some(tempFastfoodCmd => tempFastfoodCmd.idCmd === userCmd.idCmd);

                if (!cmdAlreadyInFastFoodTab) 
                {
                    // Ajouter les commandes non présentes au tableau cmdTab
                    cmdTab.push(userCmd);
              //       console.log('Commande non présente dans le tableau de commandes du fast-food, ajout au tableau', userCmd);
                }
            }
        }

        // Si des commandes doivent être ajoutées
        if (cmdTab.length !== 0) 
        {
            fastFoodUpdate = await requeteToFasFood.addCmdToFastFood(cmdTab, dataServies.FastFood.id.toString());
       //      console.log('Commandes ajoutées au fast-food', fastFoodUpdate);

            compareAndAssign(fastFoodUpdate, fastfoodCmdTab);
       //      console.log('Fast-food mis à jour', fastFoodUpdate);

            cmdTab = [];  // Réinitialiser cmdTab après l'ajout
        }
    }
}




}


       








async function compareAndAssign(fastFoodUpdate:FastFood | null, localCmdTab:Commande[])
{

       const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

       if (localCmdTab.length === 0 ) 
       {
                      await delay(20);


              for (const tempCmdGet of fastFoodUpdate!.commande) 
              {
                     
                     

                            localCmdTab.unshift(tempCmdGet)
                            
                      

              }
              
       }else
       {
              
              for (const tempCmdGet of fastFoodUpdate!.commande) 
              {


                             await delay(20);

                     const isCmdExist = localCmdTab.some(tempCmdLocal => tempCmdLocal.uidUser === tempCmdGet.uidUser && tempCmdLocal.idCmd === tempCmdGet.idCmd )

                                                               
                     if (!isCmdExist) 
                     {
                            
                          

                                   localCmdTab.unshift(tempCmdGet)

                                   
                           
                     }

              };
       }


}