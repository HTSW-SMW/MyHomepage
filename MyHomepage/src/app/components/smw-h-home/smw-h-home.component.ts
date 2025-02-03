import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'smw-h-home',
  standalone: false,

  templateUrl: './smw-h-home.component.html',
  styleUrl: './smw-h-home.component.css'
})
export class SmwHHomeComponent implements OnInit {
  items: MenuItem[] | undefined;


  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink:'/'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        routerLink:'/Projects'
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

}
