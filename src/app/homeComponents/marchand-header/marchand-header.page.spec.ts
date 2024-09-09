import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarchandHeaderPage } from './marchand-header.page';

describe('MarchandHeaderPage', () => {
  let component: MarchandHeaderPage;
  let fixture: ComponentFixture<MarchandHeaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
