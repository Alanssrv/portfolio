import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('move-up', [
      transition(':enter', [
        style({
          transform: 'translateY(20px)',
          opacity: 0.3
        }),
        animate('700ms')
      ])
    ])
  ]
})
export class HomeComponent {

}
