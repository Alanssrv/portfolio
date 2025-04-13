import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';
import { formatDate } from '../../utils';

@Component({
  selector: 'app-timeline-experiences',
  imports: [],
  templateUrl: './timeline-experiences.component.html',
  styleUrl: './timeline-experiences.component.scss'
})
export class TimelineExperiencesComponent {
  @Input() experiences!: IExperience[];
  formatDate = formatDate;

  formatPeriod(period: number | null, experience: IExperience): string {
    if (period === null) {
      const experienceMonths = experience.positions.reduce((sum, pos) => sum + (pos.period || 0), 0);
      period = this.calculateMonthsBetween(experience.startDate) - experienceMonths;
    }
    const years = Math.floor(period / 12);
    const months = period % 12;

    let textPeriod = "";
    if (years > 0)
      textPeriod = `${years} ano${years > 1 ? 's' : ''}`;

    if (months > 0)
      textPeriod = textPeriod ? `${textPeriod} e ${months} ${months > 1 ? 'meses' : 'mês'}` : `${months} ${months > 1 ? 'meses' : 'mês'}`;

    return textPeriod;
  }

  calculateMonthsBetween(pastDate: Date): number {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const pastYear = pastDate.getFullYear();
    const pastMonth = pastDate.getMonth();

    const monthsDifference = (currentYear - pastYear) * 12 + (currentMonth - pastMonth);

    return monthsDifference;
  }
}