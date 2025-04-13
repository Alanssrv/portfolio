import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExperiencesComponent } from './timeline-experiences.component';

describe('TimelineExperiencesComponent', () => {
  let component: TimelineExperiencesComponent;
  let fixture: ComponentFixture<TimelineExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
