import { Component, Input } from '@angular/core';
import { IEducation } from '../../interfaces/IEducation.interface';
import { formatDate } from '../../utils';

@Component({
  selector: 'app-timeline-education',
  imports: [],
  templateUrl: './timeline-education.component.html',
  styleUrl: './timeline-education.component.scss'
})
export class TimelineEducationComponent {
  @Input() educations!: IEducation[];

  formatDate = formatDate;
}
