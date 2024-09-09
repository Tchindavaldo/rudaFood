import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PannierStatutPage } from './pannier-statut.page';

describe('PannierStatutPage', () => {
  let component: PannierStatutPage;
  let fixture: ComponentFixture<PannierStatutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PannierStatutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
