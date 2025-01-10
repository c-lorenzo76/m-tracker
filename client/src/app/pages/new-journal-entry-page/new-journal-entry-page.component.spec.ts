import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJournalEntryPageComponent } from './new-journal-entry-page.component';

describe('NewJournalEntryPageComponent', () => {
  let component: NewJournalEntryPageComponent;
  let fixture: ComponentFixture<NewJournalEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewJournalEntryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJournalEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
