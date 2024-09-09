import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marchand-header',
  templateUrl: './marchand-header.page.html',
  styleUrls: ['./marchand-header.page.scss'],
})
export class MarchandHeaderPage implements OnInit {
  constructor() {}
  collection = [3, 3, 2];
  ngOnInit() {}
}
