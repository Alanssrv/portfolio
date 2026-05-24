import { Component, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  readonly age = signal(this.getAge(new Date(1999, 6, 22)));

  readonly aboutMeItems = [
    { key: 'about.about_me_item_1', params: { age: this.age() } },
  ];

  readonly hobbiesItems = [
    { key: 'about.hobbies_item_1', params: null },
    { key: 'about.hobbies_item_2', params: null },
    { key: 'about.hobbies_item_3', params: null }
  ];

  ngOnInit(): void {}

  public getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()))
      age--;

    return age;
  }
}
