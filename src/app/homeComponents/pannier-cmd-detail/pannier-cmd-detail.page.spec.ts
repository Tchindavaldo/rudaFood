import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PannierCmdDetailPage } from './pannier-cmd-detail.page';

describe('PannierCmdDetailPage', () => {
  let component: PannierCmdDetailPage;
  let fixture: ComponentFixture<PannierCmdDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PannierCmdDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
