import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntriesPageComponent } from './journal-entries-page.component';

describe('JournalEntriesPageComponent', () => {
  let component: JournalEntriesPageComponent;
  let fixture: ComponentFixture<JournalEntriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalEntriesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEntriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
