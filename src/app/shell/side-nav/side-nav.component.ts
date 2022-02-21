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
      id: 'Professional',
      name: 'Professional',
      display: true,
      parentRouteName: 'home',
      routeName: 'ProfessionalUse',
      icon: 'work',
      iconColor: 'text-primary',
      child: [],
    },

    {
      id: 'FeedBack_Complaints',
      name: 'Feed Back / Complaints',
      display: true,
      parentRouteName: 'home',
      routeName: 'FeedBackComponent',
      icon: 'feedback',
      iconColor: 'text-warning',
      child: [],
    },

    {
      id: 'Services',
      name: 'Services',
      display: true,
      parentRouteName: 'not-using',
      routeName: null,
      icon: 'app_registration',
      iconColor: 'text-info',
      child: [
        {
          id: 'ApplianceRepair',
          name: 'Appliance Repair',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-danger',
          icon: 'local_laundry_service',
        },

        {
          id: 'Construction',
          name: 'Construction',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-secondary',
          icon: 'location_city',
        },

        {
          id: 'EventManagment',
          name: 'Event Managment',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-primary',
          icon: 'whatshot',
        },

        {
          id: 'Cleaning_Pest Control',
          name: 'Cleaning / Pest Control',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-info',
          icon: 'bug_report',
        },

        {
          id: 'Transport_Logistics',
          name: 'Transport / Logistics',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-warning',
          icon: 'local_shipping',
        },
        {
          id: 'Vehicle_Repair_Service',
          name: 'Vehicle Repair/Service',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-danger',
          icon: 'warning',
        },
        {
          id: 'Farming_Service',
          name: 'Farming Service',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-success',
          icon: 'local_florist',
        },
        {
          id: 'Network_Services',
          name: 'Network Services',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-info',
          icon: 'settings_ethernet',
        },
        {
          id: 'gadgets_Service',
          name: 'Gadgets Service',
          display: true,
          parentRouteName: 'home',
          routeName: 'ApplianceRepair',
          iconColor: 'text-danger',
          icon: 'phonelink',
        },
      ],
    },

  ]

  ngOnInit(): void {
  }

  closesideNav() {
    this.sidenav.close();
  }

}
