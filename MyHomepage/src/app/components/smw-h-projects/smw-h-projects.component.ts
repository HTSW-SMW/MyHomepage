import { Component } from '@angular/core';

@Component({
  selector: 'smw-h-projects',
  standalone: false,

  templateUrl: './smw-h-projects.component.html',
  styleUrl: './smw-h-projects.component.css'
})
export class SmwHProjectsComponent {
  products: any[] = [
    {
      name: "SMW-PACK",
      sub: "Angular Components",
      desc: "Enthält einige Componenten und Styles",
      link: "https://www.npmjs.com/package/smw-pack"
    },
    {
      name: "GRapExtens",
      sub: "C# Lizenzmanager",
      desc: "Lizensiert die Componenten und erweitert die Controllerfuntionen in ASP.NET Core bietet zudem weitere Funktionen an",
      link: "https://www.nuget.org/packages/GRapExtens"
    }
  ];

  responsiveOptions: any[] | undefined;
  constructor() {

    this.responsiveOptions = [
      {
        breakpoint: '1700px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1260px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '830px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '350px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
