import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PannierAchatPage } from './pannier-achat.page';

describe('PannierAchatPage', () => {
  let component: PannierAchatPage;
  let fixture: ComponentFixture<PannierAchatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PannierAchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
