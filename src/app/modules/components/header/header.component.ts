import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('rotateIcon', [
      state('open', style({
        transform: 'rotate(180deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
  }

  public isShowMoreMenu = false;
  public selectedLanguage = 1;

  toggleMore() {
    this.isShowMoreMenu = !this.isShowMoreMenu;
  }

  changeLanguage(idLanguage: number) {
    this.selectedLanguage = idLanguage;
    this.translate.use(idLanguage === 1 ? 'pt-br' : 'en');
  }
}
