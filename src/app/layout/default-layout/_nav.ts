import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      }
    ]
  }
];
