import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CustomMonthYearPipe } from "../../pipes/custom-month-year.pipe";

@Component({
  selector: 'app-timeline-experiences',
  imports: [TranslatePipe, CustomMonthYearPipe],
  templateUrl: './timeline-experiences.component.html',
  styleUrl: './timeline-experiences.component.scss'
})
export class TimelineExperiencesComponent {
  @Input() experiences!: IExperience[];

  public locale: string;

  constructor(private translate: TranslateService) {
    this.locale = this.translate.getCurrentLang();
  }

  ngOnInit() {
    this.onLangChange();
  }

  onLangChange() {
    this.translate.onLangChange.subscribe(() => {
      this.locale = this.translate.getCurrentLang();
    });
  }

  formatPeriod(period: number | null, experience: IExperience): string {
    if (period === null) {
      const experienceMonths = experience.positions.reduce((sum, pos) => sum + (pos.period || 0), 0);
      period = this.calculateMonthsBetween(experience.startDate) - experienceMonths;
    }
    const years = Math.floor(period / 12);
    const months = period % 12;

    let textPeriod = "";
    if (years > 0)
      textPeriod = `${years} ${years > 1 ? this.translate.instant('common.years') : this.translate.instant('common.year')}`;

    if (months > 0)
      textPeriod = textPeriod ? `${textPeriod} ${this.translate.instant('common.and')} ${months} ${months > 1 ? this.translate.instant('common.months') : this.translate.instant('common.month')}` : `${months} ${months > 1 ? this.translate.instant('common.months') : this.translate.instant('common.month')}`;

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