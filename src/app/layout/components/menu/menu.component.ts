import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { MenuitemComponent } from './menuitem.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuitemComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService ) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Titulo menu tipo 1',
        items: [
          {
            label: 'Menu 1',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'SubMenu',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/sm-1']
              },
              {
                label: 'SubMenu',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/sm-2']
              }
            ]
          }
        ]
      },
      {
        label: 'Titulo menu tipo 2',
        items: [
          {
            label: 'menu 2a',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/sm-3'],
            badge: 'NEW'
          },
          {
            label: 'menu 2b',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/sm-4'],
            badge: 'NEW'
          }
        ]
      },
    ];
  }
}
