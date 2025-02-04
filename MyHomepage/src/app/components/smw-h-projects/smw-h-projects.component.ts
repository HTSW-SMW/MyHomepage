import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { Link } from '../../models/link.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'smw-h-projects',
  standalone: false,

  templateUrl: './smw-h-projects.component.html',
  styleUrl: './smw-h-projects.component.css'
})
export class SmwHProjectsComponent {
  datas: Card[] = [
    {
      name: "SMW-PACK",
      sub: "Angular Components",
      desc: ["Enthält einige Componenten und Styles"],
      link: new Link("https://www.npmjs.com/package/smw-pack", true)
    },
    {
      name: "GRapExtens",
      sub: "C# Lizenzmanager",
      desc: ["Lizensiert die Componenten und erweitert die Controllerfuntionen in ASP.NET Core bietet zudem weitere Funktionen an"],
      link: new Link("https://www.nuget.org/packages/GRapExtens", true)
    }
  ];


  responsiveOptions: any[] | undefined;
  constructor(public httpclient: HttpClient) {
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
