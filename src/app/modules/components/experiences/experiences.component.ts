import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        title: "Arquiteto de Software",
        subtitle: "FitBank 450 | JUN 2024 - PRESENTE"
      },
      text: "<p>Atuando como arquiteto de software consegui obter uma visão mais ampla dos projetos e produtos desenvolvidos, na área também vi como aplicar as técnologias disponíveis da melhor forma para cada solicitação</p><ul><li>Manutenção e monitoramento de ambiente produtivo</li><li>Criação de novos itens para a esteira de desenvolvimento</li><li>Documentação e diagramação de fluxos</li></ul>"
    },
    {
      summary: {
        title: "Tech Lead",
        subtitle: "FitBank 450 | SET 2023 - JUN 2024"
      },
      text: "<p>Na liderança técnica tive uma visão mais ampla da esteira de desenvolvimento inteira, consegui aplicar técnicas de liderança e gestão de pessoas, além de aplicar técnicas de desenvolvimento ágil.</p><ul><li>Gerenciamento de equipe e esteira de desenvolvimento</li><li>Publicação de itens em ambiente produtivo</li><li>Revisão e auxílio no desenvolvimento de itens</li></ul>"
    },
    {
      summary: {
        title: "Desenvolvedor .NET FullStack",
        subtitle: "FitBank 450 | ABR 2022 - SET 2023"
      },
      text: "<p>Minha primeira experiência com desenvolvimento foi bastante enriquecedora, pude aprender muito sobre as tecnologias e como aplicá-las de forma eficiente, utilizando banco de dados relacionais e não-relacionais, e no desenvolvimento de APIs, serviços e telas.</p><ul><li>Desenvolvimento e manutenção de APIs, microservices e telas</li><li>Construção de sistemas de pagamentos</li><li>Desenvolvimento de procedimentos, scripts e queries de monitoramento SQL</li></ul>"
    }
  ]);
}
