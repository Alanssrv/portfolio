import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEducationComponent } from './timeline-education.component';

describe('TimelineEducationComponent', () => {
  let component: TimelineEducationComponent;
  let fixture: ComponentFixture<TimelineEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
