import { Component, OnInit, signal } from '@angular/core';
import { IFormation } from '../../interfaces/IFormation.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formations',
  imports: [DatePipe],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.scss'
})
export class FormationsComponent implements OnInit {
  public courses = signal<IFormation[]>([]);
  public certificates = signal<IFormation[]>([]);

  ngOnInit(): void {
    this.courses.set(this.formations().filter(formation => !formation.certificate));
    this.certificates.set(this.formations().filter(formation => formation.certificate));
  }

  public formations = signal<IFormation[]>([
    {
      certificate: false,
      certificationUrl: "https://cursos.alura.com.br/user/alanssrv/degree-avancando-c-sharp-424105/certificate",
      completionDate: new Date(2022, 7, 21),
      courseUrl: "https://cursos.alura.com.br/formacao-avancando-c-sharp",
      description: "Aprenda a manipular coleções, arquivos e a lidar com exceções em C#",
      imageUrl: null,
      institution: "Alura",
      technologies: [
        "C#",
        ".NET"
      ],
      title: "C# e Orientação a Objetos: coleções, arquivos e bibliotecas"
    },
    {
      certificate: false,
      certificationUrl: "https://cursos.alura.com.br/user/alanssrv/degree-boas-praticas-c-sharp-v298233-298233/certificate",
      completionDate: new Date(2023, 4, 16),
      courseUrl: "https://cursos.alura.com.br/formacao-boas-praticas-c-sharp-v298233",
      description: "Aprenda como aplicar boas práticas como SOLID, refatoração e design patterns em C#.",
      imageUrl: null,
      institution: "Alura",
      technologies: [
        "C#",
        ".NET"
      ],
      title: "Boas práticas em C#"
    },
    {
      certificate: false,
      certificationUrl: null,
      completionDate: null,
      courseUrl: "https://www.udemy.com/course/curso-de-angular/",
      description: "Formação Angular Básico ao Avançado, coloque suas habilidades Angular em ação com este mergulho abrangente no Angular!",
      imageUrl: "https://img-c.udemycdn.com/course/480x270/3902998_5691_4.jpg",
      institution: "Udemy",
      technologies: [
        "Angular",
        "Typescript",
        "Javascript",
        "HTML",
        "Sass",
        "CSS"
      ],
      title: "Curso de Angular 2 (v17+) Typescript do Básico ao Avançado"
    },
    {
      certificate: false,
      certificationUrl: "https://www.udemy.com/certificate/UC-eb20adc0-f1d1-4252-a1cc-dfcba822d29a/",
      completionDate: new Date(2025, 3, 3),
      courseUrl: "https://www.udemy.com/course/dapper-aprenda-a-usar-o-micro-orm-mais-popular-do-net/",
      description: "Ganhe agilidade e performance com o Dapper em suas consultas SQL com .NET",
      imageUrl: "https://img-c.udemycdn.com/course/480x270/4197394_9668.jpg",
      institution: "Udemy",
      technologies: [
        "C#",
        "ADO .NET",
        "SQL Server"
      ],
      title: "Dapper - Aprenda a usar o micro-ORM mais popular do .NET"
    },
    {
      certificate: false,
      certificationUrl: "https://www.udemy.com/certificate/UC-d0093c39-413f-4213-a850-9de58f2cc59a/",
      completionDate: new Date(2024, 4, 16),
      courseUrl: "https://www.udemy.com/course-dashboard-redirect/?course_id=1412564",
      description: "Aprenda a formar, desenvolver, direcionar e gerenciar uma equipe para entregar resultados.",
      imageUrl: "https://img-c.udemycdn.com/course/240x135/1412564_5dfd_2.jpg",
      institution: "Udemy",
      technologies: [],
      title: "Fast MBA Lead - Liderança e Gestão de Pessoas"
    },
    {
      certificate: false,
      certificationUrl: "https://cursos.alura.com.br/certificate/alanssrv/microsoft-sql-server-2022-consultas-avancadas",
      completionDate: new Date(2023, 2, 20),
      courseUrl: "https://cursos.alura.com.br/course/microsoft-sql-server-2022-consultas-avancadas",
      description: "Exiba dados de colunas de uma tabela. Filtre a saída usando filtros simples e complexos. Agrupe dados de saída",
      imageUrl: null,
      institution: "Alura",
      technologies: [
        "SQL Server",
        "SSMS"
      ],
      title: "Microsoft SQL Server 2022: consultas avançadas"
    },
    {
      certificate: true,
      certificationUrl: null,
      completionDate: null,
      courseUrl: "https://cursos.alura.com.br/course/microsoft-sql-server-2022-consultas-avancadas",
      description: "Demonstre o conhecimento fundamental dos conceitos de nuvem, dos principais serviços do Azure, além de recursos e ferramentas de gerenciamento e governança do Azure.",
      imageUrl: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1461449489/image193214236496861289.png",
      institution: "Alura",
      technologies: [
        "Azure", "Azure DevOps"
      ],
      title: "Microsoft Certified: Azure Fundamentals"
    }
  ]);


}
