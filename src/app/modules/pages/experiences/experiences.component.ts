import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';
import { EducationState, IEducation } from '../../interfaces/IEducation.interface';
import { IProject } from '../../interfaces/IProject.interface';
import { TimelineExperiencesComponent } from '../../components/timeline-experiences/timeline-experiences.component';
import { TimelineEducationComponent } from "../../components/timeline-education/timeline-education.component";
import { ProjectsGridComponent } from "../../components/projects-grid/projects-grid.component";

@Component({
  selector: 'app-experiences',
  imports: [TimelineExperiencesComponent, TimelineEducationComponent, ProjectsGridComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayEducation = signal<IEducation[]>([
    {
      institution: "Universidade Federal do Ceará (UFC)",
      course: "Ciência da Computação",
      startDate: new Date("2017-08-07"),
      endDate: new Date("2023-06-30"),
      state: EducationState.COMPLETED,
      projects: [
        {
          title: "Bolsa: Experiência em R para estatística",
          description: "Desenvolvimento de algoritmos para análise estatística utilizando R.",
          technologies: ["R"]
        },
        {
          title: "Bolsa: Projeto VAR",
          description: "Edição e publicação de vídeo-aulas de diversas disciplinas no YouTube.",
          technologies: ["OpenShot", "Audacity"]
        }
      ]
    }
  ]);

  public arrayExperiences = signal<IExperience[]>([
    {
      company: "FitBank 450",
      companyUrl: "https://www.fitbank.com.br",
      companyCategory: "Fintech",
      startDate: new Date(2022, 4, 11),
      endDate: null,
      positions: [
        {
          title: "Desenvolvedor .NET FullStack",
          period: 17,
          description: "Desenvolvedor .NET FullStack na área de pagamentos, atuando no desenvolvimento e manutenção de APIs, microservices e telas.",
          technologies: [
            "C#/.NET", "SQL Server"
          ]
        },
        {
          title: "Tech Lead Júnior",
          period: 9,
          description: "Gerenciador de equipe, atuando na gestão de pessoas e processos, auxílio no desenvolvimento e manutenção de APIs, microservices e telas.",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "Azure", "IIS"
          ]
        },
        {
          title: "Arquiteto de Sistemas Júnior",
          period: 9,
          description: "Estudo e documentação de demandas junto ao time de produtos para fluxo de pagamentos com integração externa e manutenção de ambientes de homologação e produtivo",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "RabbitMQ", "Azure"
          ]
        },
        {
          title: "Desenvolvedor .NET FullStack",
          period: null,
          description: "Desenvolvedor .NET FullStack na área de pagamentos, atuando no desenvolvimento e manutenção de APIs, microservices e telas, voltadas principalmente para integrações em fluxos de pagamentos.",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "RabbitMQ", "Azure"
          ]
        }
      ]
    }
  ]);

  public arrayProjects = signal<IProject[]>([
    {
      "description": "Teste técnico desenvolvido como parte do processo seletivo da CTS Compass",
      "personal": false,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "Sass",
        "C#",
        ".NET",
        "ASP.NET",
        "SQL Server",
        "Entity Framework"
      ],
      "title": "Teste técnico - Compass",
      "url": "https://github.com/Alanssrv/teste-cts-compass"
    },
    {
      "description": "Projeto didático para desenvolvimento de um site de consumo e visualização de dados de uma API externa",
      "personal": true,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "Sass"
      ],
      "title": "Naruto Frontend",
      "url": "https://github.com/Alanssrv/naruto-front"
    },
    {
      "description": "Aplicativo mobile para buscar e compartilhar gifs a partir da API do Giphy",
      "personal": true,
      "technologies": [
        "Dart",
        "Flutter"
      ],
      "title": "Giphy App",
      "url": "https://github.com/Alanssrv/gif_app"
    },
    {
      "description": "Projeto para desenvolvimento de portfólio pessoal",
      "personal": true,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "Sass"
      ],
      "title": "Portólio",
      "url": "https://github.com/Alanssrv/portfolio"
    },
    {
      "description": "Teste técnico desenvolvido como parte do processo seletivo da Korp",
      "personal": false,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "CSS",
        "C#",
        ".NET",
        "ASP.NET",
        "Entity Framework",
        "SQL Server"
      ],
      "title": "Teste técnico - Korp",
      "url": "https://github.com/Alanssrv/teste_korp"
    },
    {
      "description": "Aplicativo Web de um jogo que usa reconhecimento de voz",
      "personal": true,
      "technologies": [
        "HTML",
        "CSS",
        "Javascript"
      ],
      "title": "Jogo Número Secreto",
      "url": "https://github.com/Alanssrv/JogoNumeroSecreto"
    }
  ]);
}
