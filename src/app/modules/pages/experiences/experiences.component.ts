import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';
import { EducationState, IEducation } from '../../interfaces/IEducation.interface';
import { IProject } from '../../interfaces/IProject.interface';
import { TimelineExperiencesComponent } from '../../components/timeline-experiences/timeline-experiences.component';
import { TimelineEducationComponent } from "../../components/timeline-education/timeline-education.component";
import { ProjectsGridComponent } from "../../components/projects-grid/projects-grid.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  imports: [TimelineExperiencesComponent, TimelineEducationComponent, ProjectsGridComponent, TranslatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayEducation = signal<IEducation[]>([
    {
      institution: "education.institution.ufc",
      course: "education.course.computer.science",
      startDate: new Date("2017-08-07"),
      endDate: new Date("2023-06-30"),
      state: EducationState.COMPLETED,
      projects: [
        {
          title: "education.project1.title",
          description: "education.project1.description",
          technologies: ["R"]
        },
        {
          title: "education.project2.title",
          description: "education.project2.description",
          technologies: ["OpenShot", "Audacity"]
        }
      ]
    }
  ]);

  public arrayExperiences = signal<IExperience[]>([
    {
      company: "FitBank 450",
      companyUrl: "https://www.fitbank.com.br",
      companyCategory: "works.category.fintech",
      startDate: new Date(2022, 4, 11),
      endDate: new Date(2025, 3, 17),
      positions: [
        {
          title: "work1.position1.title",
          period: 17,
          description: "work1.position1.description",
          technologies: [
            "C#/.NET", "SQL Server"
          ]
        },
        {
          title: "work1.position2.title",
          period: 9,
          description: "work1.position2.description",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "Azure", "IIS"
          ]
        },
        {
          title: "work1.position3.title",
          period: 9,
          description: "work1.position3.description",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "RabbitMQ", "Azure"
          ]
        },
        {
          title: "work1.position4.title",
          period: 2,
          description: "work1.position4.description",
          technologies: [
            "C#/.NET", "SQL Server", "MongoDB", "RabbitMQ", "Azure"
          ]
        }
      ]
    },
    {
      company: "CTS Compass",
      companyUrl: "https://www.ctscompass.com/",
      companyCategory: "works.category.reliability.engineer",
      startDate: new Date(2025, 4, 5),
      endDate: null,
      positions: [
        {
          title: "work2.position1.title",
          period: null,
          description: "work2.position1.description",
          technologies: [
            "C#/.NET", "Angular", "SQL Server", "AzureDevops"
          ]
        },
      ]
    }
  ]);

  public arrayProjects = signal<IProject[]>([
    {
      "description": "project1.description",
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
      "title": "project1.title",
      "url": "https://github.com/Alanssrv/teste-cts-compass"
    },
    {
      "description": "project2.description",
      "personal": true,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "Sass"
      ],
      "title": "project2.title",
      "url": "https://github.com/Alanssrv/naruto-front"
    },
    {
      "description": "project3.description",
      "personal": true,
      "technologies": [
        "Dart",
        "Flutter"
      ],
      "title": "project3.title",
      "url": "https://github.com/Alanssrv/gif_app"
    },
    {
      "description": "project4.description",
      "personal": true,
      "technologies": [
        "Angular",
        "Typescript",
        "HTML",
        "Sass"
      ],
      "title": "project4.title",
      "url": "https://github.com/Alanssrv/portfolio"
    },
    {
      "description": "project5.description",
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
      "title": "project5.title",
      "url": "https://github.com/Alanssrv/teste_korp"
    },
    {
      "description": "project6.description",
      "personal": true,
      "technologies": [
        "HTML",
        "CSS",
        "Javascript"
      ],
      "title": "project6.title",
      "url": "https://github.com/Alanssrv/JogoNumeroSecreto"
    }
  ]);
}
