import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrls: ['./item4.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Item4Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
