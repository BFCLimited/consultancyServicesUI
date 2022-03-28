import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  latitudeUsedInEditModeOnly: any;
  longitudeUsedInEditModeOnly: any;

  citys : any =[
    {
      cityName : 'Hyderabad',
      cityId:1,
      image:'assets/images/HyderabadCity.jpg'
    },
    {
      cityName : 'Vijayawada',
      cityId:1,
      image:'assets/images/VijayawadaCity.jpg'
    },
    {
      cityName : 'Visakhapatnam',
      cityId:1,
      image:'assets/images/VisakhapatnamCity.jpg'
    },
    {
      cityName : 'Mangalagiri',
      cityId:1,
      image:'assets/images/MangalagiriCity.jpg'
    },
    {
      cityName : 'Amaravathi',
      cityId:1,
      image:'assets/images/AmaravatiCity.jpeg'
    },
    {
      cityName : 'Rajahmundry',
      cityId:1,
      image:'assets/images/RajahmundryCity.jpg'
    },
    {
      cityName : 'Guntur',
      cityId:1,
      image:'assets/images/GunturCity.jpg'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  SelectedCityClick(){
    alert("Working on...");
  }

}
