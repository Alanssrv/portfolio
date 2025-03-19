import { Component, signal, inject } from '@angular/core';
import { IProject } from '../../interfaces/IProject.interface';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/img/projects/fitbank_logo.png',
      alt: 'Logo FitBank projeto WireTransfer',
      title: 'WireTransfer',
      height: '50px',
      width: '50px',
      description: 'Projeto para desenvolvimento de um core bancário para realização de transferência entre bancos internacionais, no contexto do payroll foram desenvolvimento métodos para realizar transferências internas a FitBank a partir de uma folha de pagamentos',
      links: [{name:'Documentação FitBank - Payroll', href:'https://dev.fitbank.com.br/docs/payroll'}]
    },
    {
      src: 'assets/img/projects/giphy_app.webp',
      alt: 'Logo Giphy projeto de app para buscar gifs',
      title: 'GifApp',
      height: '50px',
      width: '40px',
      description: 'Desenvolvimento de uma aplicação mobile com Dart+Flutter que comunica com a API do Giphy para buscar gifs, exibir em tela e compartilhar com aplicações externas',
      links: [{name:'Repositório GifApp', href:'https://github.com/Alanssrv/gif_app'}]
    },
    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Logo do portfólio web',
      title: 'Portfólio',
      height: '50px',
      width: '50px',
      description: 'Projeto desse próprio portfólio, desenvolvido com Angular 2+ para aplicar conhecimentos em desenvolvimento web e mostrar um pouco do meu trabalho',
      links: [{name:'Repositório Portfólio', href:'https://github.com/Alanssrv/portfolio'}]
    }
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
