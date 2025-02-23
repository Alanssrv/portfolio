import { Component, signal } from '@angular/core';
import { IProject } from '../../interfaces/IProject.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/img/projects/fitbank_logo.png',
      alt: 'Logo FitBank projeto WireTransfer',
      title: 'Projeto WireTransfer - Transferência entre bancos internacionais',
      height: '50px',
      width: '50px',
      description: '',
      links: [{name:'', href:'https://dev.fitbank.com.br/docs/payroll'}]
    },
    {
      src: 'assets/img/projects/giphy_app.webp',
      alt: 'Logo Giphy projeto de app para buscar gifs',
      title: 'Projeto aplicativo mobile de busca de gifs',
      height: '50px',
      width: '40px',
      description: '',
      links: [{name:'', href:'https://github.com/Alanssrv/gif_app'}]
    },
    {
      src: 'assets/img/projects/portifolio.png',
      alt: 'Logo do portifólio web',
      title: 'Projeto portifólio web com Angular 2+',
      height: '50px',
      width: '50px',
      description: '',
      links: [{name:'', href:'https://github.com/Alanssrv/portifolio'}]
    }
  ]);
}
