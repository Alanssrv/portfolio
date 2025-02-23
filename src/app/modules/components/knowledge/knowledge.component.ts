import { Component, signal, Signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      title: 'Ícone conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/azure-devops.svg',
      title: 'Ícone conhecimento de azure-devops',
    },
    {
      src: 'assets/icons/knowledge/c-sharp.svg',
      title: 'Ícone conhecimento de c-sharp',
    },
    {
      src: 'assets/icons/knowledge/jquery.svg',
      title: 'Ícone conhecimento de jquery',
    },{
      src: 'assets/icons/knowledge/mongodb.svg',
      title: 'Ícone conhecimento de mongodb',
    },{
      src: 'assets/icons/knowledge/sql.svg',
      title: 'Ícone conhecimento de sql',
    },
  ]);
}
