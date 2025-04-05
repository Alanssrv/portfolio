import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';
import { EducationState, IEducation } from '../../interfaces/IEducation.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
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
      startDate: new Date(2022, 3, 11),
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

  formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      month: 'short'
    });
    const month = formatter.format(date).toUpperCase();
    return `${month} ${date.getFullYear()}`;
  }

  formatPeriod(period: number | null, experience: IExperience): string {
    if (period === null) {
      const experienceMonths = experience.positions.reduce((sum, pos) => sum + (pos.period || 0), 0);
      period = this.calculateMonthsBetween(experience.startDate) - experienceMonths;
    }
    const years = Math.floor(period / 12);
    const months = period % 12;

    let textPeriod = "";
    if (years > 0)
      textPeriod = `${years} ano${years > 1 ? 's' : ''}`;

    if (months > 0) 
      textPeriod = textPeriod ? `${textPeriod} e ${months} ${months > 1 ? 'meses' : 'mês'}` : `${months} ${months > 1 ? 'meses' : 'mês'}`;

    return textPeriod;
  }

  calculateMonthsBetween(pastDate: Date): number {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const pastYear = pastDate.getFullYear();
    const pastMonth = pastDate.getMonth();

    const monthsDifference = (currentYear - pastYear) * 12 + (currentMonth - pastMonth);

    return monthsDifference;
  }
}
