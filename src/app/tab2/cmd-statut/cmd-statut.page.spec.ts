import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmdStatutPage } from './cmd-statut.page';

describe('CmdStatutPage', () => {
  let component: CmdStatutPage;
  let fixture: ComponentFixture<CmdStatutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdStatutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
