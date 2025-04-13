import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly icons = signal([
    {
      url: "https://api.whatsapp.com/send?phone=5585987790622&text=Ol%C3%A1%20Alan%2C%20tudo%20bem%3F",
      imgSrc: "assets/icons/whatsapp.svg",
      name: "Ícone para contato do WhatsApp"
    },
    {
      url: "https://www.instagram.com/s0usa.dll/",
      imgSrc: "assets/icons/instagram.svg",
      name: "Ícone para acesso ao perfil do Instagram"
    },
    {
      url: "https://github.com/alanssrv/",
      imgSrc: "assets/icons/github.svg",
      name: "Ícone para acesso ao perfil do Github"
    },
    {
      url: "https://www.linkedin.com/in/alan-sousa-6790ba1a3/",
      imgSrc: "assets/icons/linkedin.svg",
      name: "Ícone para acesso ao perfil do LinkedIn"
    }
  ]);
}
