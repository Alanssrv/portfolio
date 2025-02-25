import { Component, signal, ViewEncapsulation } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        title: "Arquiteto de Software",
        subtitle: "FitBank 450 | JUN 2024 - PRESENTE"
      },
      article: {
        text: "Atuando como arquiteto de software consegui obter uma visão mais ampla dos projetos e produtos desenvolvidos, na área também vi como aplicar as técnologias disponíveis da melhor forma para cada solicitação",
        points: [
          "Manutenção e monitoramento de ambiente produtivo", "Criação de novos itens para a esteira de desenvolvimento", "Documentação e diagramação de fluxos"
        ]
      }
    },
    {
      summary: {
        title: "Tech Lead",
        subtitle: "FitBank 450 | SET 2023 - JUN 2024"
      },
      article: {
        text: "Na liderança técnica tive uma visão mais ampla da esteira de desenvolvimento inteira, consegui aplicar técnicas de liderança e gestão de pessoas, além de aplicar técnicas de desenvolvimento ágil.",
        points: [
          "Gerenciamento de equipe e esteira de desenvolvimento", "Publicação de itens em ambiente produtivo", "Revisão e auxílio no desenvolvimento de itens"
        ]
      }
    },
    {
      summary: {
        title: "Desenvolvedor .NET FullStack",
        subtitle: "FitBank 450 | ABR 2022 - SET 2023"
      },
      article: {
        text: "Minha primeira experiência com desenvolvimento foi bastante enriquecedora, pude aprender muito sobre as tecnologias e como aplicá-las de forma eficiente, utilizando banco de dados relacionais e não-relacionais, e no desenvolvimento de APIs, serviços e telas.",
        points: [
          "Desenvolvimento e manutenção de APIs, microservices e telas", "Construção de sistemas de pagamentos", "Desenvolvimento de procedimentos, scripts e queries de monitoramento SQL"
        ]
      }
    }
  ]);
}
