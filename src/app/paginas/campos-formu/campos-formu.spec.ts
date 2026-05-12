import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposFormu } from './campos-formu';

describe('CamposFormu', () => {
  let component: CamposFormu;
  let fixture: ComponentFixture<CamposFormu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposFormu],
    }).compileComponents();

    fixture = TestBed.createComponent(CamposFormu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
