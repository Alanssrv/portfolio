import { Component, Input } from '@angular/core';
import { IEducation } from '../../interfaces/IEducation.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CustomMonthYearPipe } from '../../pipes/custom-month-year.pipe';

@Component({
  selector: 'app-timeline-education',
  imports: [TranslatePipe, CustomMonthYearPipe],
  templateUrl: './timeline-education.component.html',
  styleUrl: './timeline-education.component.scss'
})
export class TimelineEducationComponent {
  @Input() educations!: IEducation[];

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
}
