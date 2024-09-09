 import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { showPages } from '../services/showPages';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit  {
  

  constructor( 
    public showPages : showPages
  ) { }

  ngOnInit() {
    const height = window.innerHeight
    if (height<650) {
 
    }
  }
  }