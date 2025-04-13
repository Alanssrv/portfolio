import { Component, Input } from '@angular/core';
import { IFormation } from '../../interfaces/IFormation.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-courses-grid',
  imports: [DatePipe],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.scss'
})
export class CoursesGridComponent {
  @Input() courses!: IFormation[];  
}
