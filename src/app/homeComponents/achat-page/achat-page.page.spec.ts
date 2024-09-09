import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchatPagePage } from './achat-page.page';

describe('AchatPagePage', () => {
  let component: AchatPagePage;
  let fixture: ComponentFixture<AchatPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
