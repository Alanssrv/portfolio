import { Component, Input } from '@angular/core';
import { IProject } from '../../interfaces/IProject.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-grid',
  imports: [TranslatePipe],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss'
})
export class ProjectsGridComponent {
  @Input() projects!: IProject[];
}
