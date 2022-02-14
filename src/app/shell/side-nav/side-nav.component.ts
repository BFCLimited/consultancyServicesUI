import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  constructor() { }

  newSideNav = [
    {
      id: 'dashboardmenu',
      name: 'Dashboard',
      display: true,
      parentRouteName: 'dashboard',
      routeName: 'main-view',
      icon: 'home',
      child: [],
    },

    {
      id: 'cashierdashboardmenu',
      name: 'Cashier Dashboard',
      display: true,
      parentRouteName: 'cashier-dashboard',
      routeName: 'main-view',
      icon: 'account_balance_wallet',
      child: [],
    },
  ]

  ngOnInit(): void {
  }

}
