import { Component, Input } from '@angular/core';
import { IFormation } from '../../interfaces/IFormation.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-certifications-grid',
  imports: [DatePipe],
  templateUrl: './certifications-grid.component.html',
  styleUrl: './certifications-grid.component.scss'
})
export class CertificationsGridComponent {
  @Input() certificates!: IFormation[];
}
