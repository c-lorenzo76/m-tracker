import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevMoodsChartComponent } from './prev-moods-chart.component';

describe('PrevMoodsChartComponent', () => {
  let component: PrevMoodsChartComponent;
  let fixture: ComponentFixture<PrevMoodsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevMoodsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevMoodsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
