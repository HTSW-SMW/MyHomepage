import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;


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
