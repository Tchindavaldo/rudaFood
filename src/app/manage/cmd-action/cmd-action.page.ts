import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { requeToFastFood } from 'src/app/services/requeToFastFood';

@Component({
  selector: 'app-cmd-action',
  templateUrl: './cmd-action.page.html',
  styleUrls: ['./cmd-action.page.scss'],
})
export class CmdActionPage implements OnInit {

  @Input() NomCmdUser = 'tchinda valdo blair'
  @Input() titre = 'poulet roti'
  @Input() statut = 'valider'
  @Input() prix = '1500f'
  @Input() backcolor = 'black'
  @Input() action = 'isPendingToFastFood'
  @Input() uid = ''
  @Input() idx = 0

    constructor(private dataGet:DataService,
      private requeteToFasFood:requeToFastFood,
      private renderer: Renderer2, private el: ElementRef,
    ) { }
  
    ngOnInit() {
   const ionItem = this.el.nativeElement.querySelector('ion-item');
 setTimeout
 (
	()=>{
		   if (ionItem) {
      this.renderer.setStyle(ionItem, 'transform', 'translateX(0)');
    }else{
      console.log('element pas encore diponible');
      
    }
	}
 )
  
    }
    async statutChange(uid: string, idx: number, actions: string) {
      try {
        const tempFastFoodGet = await this.requeteToFasFood.getFastFoodFromFirestore(this.dataGet.FastFood.id.toString());
    
        if (tempFastFoodGet != null) {
          const fastFoodToAdd = tempFastFoodGet;
    
          fastFoodToAdd.commande.forEach((el, index) => {
            console.log('actions:', actions);
    
            if (el.uidUser === uid && el.idCmd === idx) {
              fastFoodToAdd.commande[index].staut = actions;
              if (actions === 'isFinish') {
                fastFoodToAdd.commande[idx].isBuy = false;
              }
            }
          });
    
          await this.requeteToFasFood.addFastFoodToFirestore(fastFoodToAdd, this.dataGet.FastFood.id.toString());
          this.dataGet.FastFood = fastFoodToAdd;
    
          console.log('Index received:', idx);
          console.log('New status set:', actions);
        } else {
          console.log('No fast food found with the given ID.');
        }
      } catch (err) {
        console.log('Error updating the command status:', err);
      }
    }
    

  
}
