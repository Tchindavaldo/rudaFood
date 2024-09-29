import { DocumentData } from "@angular/fire/compat/firestore";
import { DataService } from "../../data.service";
import { Commande } from "src/app/data/commande";
import { requeToFastFood } from "../../requeToFastFood"; 
import { FastFood } from "src/app/data/fastFood";
import { requeToUser } from "../../requeToUser";
import { Users } from "src/app/data/Users";

export async function updateUserdCmdAfterFastFoodNewAction(FastfoodGet: any,dataServies:DataService,requeteToUser:requeToUser)
{




       
       let cmdTab:Commande[] = [];
       let userUpdate:Users | null = null;
       const Fastfood = FastfoodGet.FastFood

       console.log('document fastfood notify from backend',FastfoodGet);    










       if (Fastfood.proprietaire.infos.uid === dataServies.user.infos.uid )
       {

              if (Fastfood.commande === undefined )
              {

                     dataServies.FastFood.commande = []
                     console.log('valeur du tableau de commande du fastfood mis a jour localement',dataServies.FastFood);   
                     
                     
              }
              
       }
              
              
              



       
            

       console.log('commande de l\'utilisateur sur lequel on va boucler',dataServies.user.cmd);
       
       for (const userCmd of dataServies.user.cmd)
       {
              
              for (const FastfoodCmd of Fastfood.commandeFastFood)
              {
                     
                     if (FastfoodCmd.uidUser === userCmd.uidUser)
                     {

                            if (userCmd.staut === 'isPendingToFastFood')
                            {

                                   console.log('user uid de la commande chez le fastfd ',FastfoodCmd.uidUser);  
                                   console.log('user uid de la commande chez le cliend ',userCmd.uidUser);  
                                   userCmd.staut = 'IsWaitingActionFromFastFood'    
                                   console.log('valeur du user apres mofigication du staut ',userCmd,'id de l\'utilisateur a uploader',dataServies.idxUser);   
                            
                            }else 
                            {

                                   console.log("le statut est deja en attente",userCmd.staut);
                        
                            } 
                            
                     
                     }else
                     {

                            console.log("la commande n'est pas pour ce client");
                        
                     }

              };

       };











       console.log('valeur du user avant l\'update ',userUpdate,'id de l\'utilisateur a uploader',dataServies.idxUser.toString());   

       
       userUpdate = await  requeteToUser.addUserToFirestore(dataServies.user,dataServies.idxUser.toString())
       console.log('fast food mis a jour ',userUpdate);   
       
       


              
}
