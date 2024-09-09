import { dataMerchend } from '../data/dataMerchend';
import { Injectable } from '@angular/core';
import { Menu } from '../data/menu';
import { generalDataFastFood } from '../data/generalDataFastFood';
import { FastFood } from '../data/fastFood';
import { User } from 'firebase/auth';
import { Users } from '../data/Users';
import { generalDataUser } from '../data/generalDataUser';
import { Commande } from '../data/commande';
import { Commande2 } from '../data/commande2';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  
  photoProfil!:string|null;
  idxFastFood!:number;
  idxUser!:number;
  menu!:Menu;
  cmdTab!:Commande[];
  // menuTab:Menu[]=[new Menu('',0,0,0,'','','','','')]
  menuTab:Menu[]=[]
  dataList: any[] = [];
  userTab: Users[] = [];
  generalDataFastFood!:generalDataFastFood;  
  generalDataUser!:generalDataUser|null;  
  FastFoodTab:FastFood[]=[];
  FastFood!:FastFood;
  user! : Users;
  userN : Users|null = null;

}
