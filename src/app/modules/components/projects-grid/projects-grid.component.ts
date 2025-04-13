import { Component, Input } from '@angular/core';
import { IProject } from '../../interfaces/IProject.interface';

@Component({
  selector: 'app-projects-grid',
  imports: [],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss'
})
export class ProjectsGridComponent {
  @Input() projects!: IProject[];
}
