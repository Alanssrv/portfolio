import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  public age = signal(0);
  readonly birthDate = new Date(1999, 6, 22);

  ngOnInit(): void {
    this.age.set(this.getAge(this.birthDate));
  }

  public getAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()))
      age--;

    return age;
  }

}
