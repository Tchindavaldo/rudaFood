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

              if (user.commande === undefined )
              {

                     dataServies.user.cmd = []
                     console.log('valeur du tableau de commande de l\'utilisateur mis a jour localement');   
                     
                     
              }
              
       }










      if (dataServies.user.isMarchand)
       {





              
              let cmdTab:Commande[] = [];
              let fastFoodUpdate:FastFood | null;

              console.log('user',userGet);   
              console.log('fast food',dataServies.FastFood);
              
              



       
            



              for (const userCmd of user.commande)
              {
                     
                     if (userCmd.idFastFood === dataServies.FastFood.id && userCmd.staut === 'isPendingToFastFood')
                     {

                            cmdTab.push(userCmd)
                            fastFoodUpdate = await  requeteToFasFood.addCmdToFastFood(cmdTab,dataServies.FastFood.id.toString())
                            console.log('fast food mis a jour ',fastFoodUpdate);       
                     
                     }else
                     {

                            console.log("la commande n'est pas pour ce fastfood");
                            

                     }

              };
            
       }



              
}
