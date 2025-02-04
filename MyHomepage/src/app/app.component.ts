import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  searchresults: any[] = [];

  value: any;
  index: { keyword: string, link: string }[] = [
    { keyword: "Projekte", link: "/Projects" },
    { keyword: "Lizenz", link: "/Projects" },
    { keyword: "Angular", link: "/Projects" }
  ]

  search(event: AutoCompleteCompleteEvent) {
    this.searchresults = this.index.filter(x => x.keyword.toLowerCase().includes(event.query.toLowerCase()))//.map(item => item.keyword + '-' + item.link);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/Home'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        routerLink: '/Projects'
        //badge: '3',
        //items: [
        //  {
        //    label: 'Core',
        //    icon: 'pi pi-bolt',
        //    shortcut: '⌘+S',
        //  },
        //  {
        //    label: 'Blocks',
        //    icon: 'pi pi-server',
        //    shortcut: '⌘+B',
        //  },
        //  {
        //    separator: true,
        //  },
        //  {
        //    label: 'UI Kit',
        //    icon: 'pi pi-pencil',
        //    shortcut: '⌘+U',
        //  },
        //],
      },
    ];
  }

  icon: string = "pi pi-moon";
  toggleDarkMode() {
    const element = document.querySelector('html') as HTMLElement;
    if (!element.classList.toggle('my-app-dark')) {
      this.icon = "pi pi-sun";
    } else {
      this.icon = "pi pi-moon";

    }
  }
  title = 'MyHomepage';
}
