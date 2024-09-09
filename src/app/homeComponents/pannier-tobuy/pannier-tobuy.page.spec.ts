import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PannierTobuyPage } from './pannier-tobuy.page';

describe('PannierTobuyPage', () => {
  let component: PannierTobuyPage;
  let fixture: ComponentFixture<PannierTobuyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PannierTobuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
