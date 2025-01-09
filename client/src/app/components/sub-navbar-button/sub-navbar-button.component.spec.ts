import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavbarButtonComponent } from './sub-navbar-button.component';

describe('SubNavbarButtonComponent', () => {
  let component: SubNavbarButtonComponent;
  let fixture: ComponentFixture<SubNavbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
