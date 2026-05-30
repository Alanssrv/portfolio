import { Component, OnInit, Renderer2 } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2
  ) { }

  public isShowMoreMenu = false;
  public selectedLanguage = 1;
  public selectedTheme = 1;
  public isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.selectedTheme = 2;
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.selectedLanguage = parseInt(savedLanguage, 10);
      this.translate.use(this.selectedLanguage === 1 ? 'pt-br' : 'en');
    }
  }

  toggleMore() {
    this.isShowMoreMenu = !this.isShowMoreMenu;
  }

  changeLanguage(idLanguage: number) {
    this.isShowMoreMenu = false;
    this.selectedLanguage = idLanguage;
    this.translate.use(idLanguage === 1 ? 'pt-br' : 'en');
    localStorage.setItem('language', idLanguage.toString());
  }

  changeTheme(idTheme: number) {
    this.isShowMoreMenu = false;
    this.selectedTheme = idTheme;
    const newTheme = idTheme === 1 ? 'light' : 'dark';
    this.isDarkMode = newTheme === 'dark';

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
