import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PorteFeuilHistoriquePage } from '../porte-feuil-historique/porte-feuil-historique.page';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Item3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
