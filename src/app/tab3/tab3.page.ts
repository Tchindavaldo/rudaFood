import { User } from 'firebase/auth';
import { Component, OnInit } from '@angular/core';
import { Users } from '../data/Users';
import { dataMerchend } from '../data/dataMerchend';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ToastButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
user!:Users

focus2 = "FastFood";
showFatsFood = true
  constructor(private data: DataService,
    private toastController: ToastController, 
    private router:Router
  ) {}

  ngOnInit(): void {

    // console.log(chip1.toggleAttribute);
    
    // this.user = this.data.user
    // if (this.user.isMarchand) {
    //   this.showFatsFood =true
    // }
// this.redirectStore()
    
  }
  tg(idxChip :number){
    const chip = document.getElementsByClassName("chip") as HTMLCollectionOf<HTMLIonChipElement>

   chip[0].classList.remove('focusedChip')
   chip[1].classList.remove('focusedChip')
   chip[idxChip].classList.add('focusedChip')
     console.log('focusedChip');
     

  }

  
  redirectStore(){
    // console.log(this.data.user.isMarchand);
    console.log('tabs33333333333333333333333333333333');

    // this.data.FastFoodTab.forEach(
    //   TempFastFood =>{
    //     if (this.data.user.isMarchand && TempFastFood.proprietaire.infos.email == this.data.user.infos.email &&TempFastFood.proprietaire.infos.uid == this.data.user.infos.uid) {
    //       this.data.FastFood = TempFastFood
    //       console.log('gerant de daftfood trouver fast ajouterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    //       this.redirect('/tabs/tab3/commande')

    //     }else{
    //       console.log('gerant pas trouver');
    //       this.managerFastFoodFound = false
    //     }
    //   }
    // )


    if (this.data.userN  == null) {
      
this.presentToast('bottom','compte marchand pas recuperer de la base de donne verifier votre connexion et ressayez')
this.redirect('/tabs/tab3/historique')
// this.navCtrl.navigateForward('historique')
    }

//     if (!this.data.user.isMarchand) {
//       this.redirect('/tabs/tab3/historique')

//     }


//     if (this.data.user.isMarchand && !this.managerFastFoodFound) {
//       this.redirect('/tabs/tab3/historique')
// this.presentToast('bottom','Probleme lors de la recuperation de votre compte marchand veuillez contacter RudaFood')
//     }

  }



  async showErrorToast(error: any) {
    let message: string;
    switch (error) {
      case 'auth/invalid-email':
        message = 'L\'e-mail doit avoir une syntaxe valide.';
        break;
        case 'email-not-verified':
          message = 'Email non vérifié. Cliquez sur le lien envoyé à votre compte pour vérifier et valider votre email';
          break;
      case 'auth/email-already-in-use':
        message = 'L\'adresse e-mail est déjà utilisée par un autre compte.';
        break;
      case 'auth/weak-password':
        message = 'Le mot de passe est trop faible.';
        break;
        case 'auth/wrong-password':
          message = 'Le mot de passe est incorrect.';
          break;
      case 'auth/missing-password':
        message = 'Le mot de passe ne doit pas etre vide.';
        break;
      case 'auth/user-not-found':
        message = 'Aucun utilisateur ne correspond à ces identifiants.';
        break;
      case 'auth/too-many-requests':
        message = 'Trop de requêtes ont été envoyées depuis cette adresse IP, veuillez réessayer plus tard.';
        break;
      case 'auth/operation-not-allowed':
        message = 'Cette opération n\'est pas autorisée pour ce type de compte.';
        break;
      case 'auth/user-disabled':
        message = 'L\'utilisateur a été désactivé.';
        break;
      case 'auth/account-exists-with-different-credential':
        message = 'Le compte existe déjà avec un identifiant différent.';
        break;
      case 'auth/requires-recent-login':
        message = 'L\'opération nécessite une connexion récente de l\'utilisateur.';
        break;
      case 'auth/invalid-verification-code':
        message = 'Le code de vérification est incorrect.';
        break;
      case 'auth/invalid-verification-id':
        message = 'L\'ID de vérification est incorrect.';
        break;
      case 'auth/network-request-failed':
        message = 'Connexion Internet indisponible.';
        break;
        case 'auth/internal-error':
          message = 'Une erreur interne s\'est produite.';
          break;
          case 'auth/invalid-credential':
            message = 'porbleme lié avec cette email et mot de passe essayer une authentification via google en clicquant sur l\'icone google en haut.';
            break;
      default:
        message = 'Une erreur est survenue.';
    }
  
    // Afficher le message d'erreur sous forme de toast
    console.log(message);
    this.presentToast('bottom',message)
  }
  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 10000,
      position: position,
      cssClass: 'monToast',
      swipeGesture: 'vertical',
      buttons: this.toastButtons
    });
  
    toast.onDidDismiss().then((event) => this.setRoleMessage(event));
    await toast.present();
  }

  public toastButtons: (string | ToastButton)[] = [
    {
      side: 'end' as 'end', // Ensuring the type is correct
      icon: 'close-circle-outline',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];
  

  setRoleMessage(ev:any) {
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  } 
 

  redirect(path:string){
    this.router.navigate([path])

  }
  
  value(val:string ){
     this.focus2=val
  }
}
