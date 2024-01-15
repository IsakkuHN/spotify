import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  customOptions: Array<any> = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Your playlist',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Create list',
        icon: 'uil-plus-square',
      },
      {
        name: 'Songs that you like',
        icon: 'uil-heart-medical',
      },
    ];

    this.customOptions = [
      {
        name: 'My list 1st',
        router: ['/'],
      },
      {
        name: 'My list 2nd',
        router: ['/'],
      },
      {
        name: 'My list 3rd',
        router: ['/'],
      },
      {
        name: 'My list 4th',
        router: ['/'],
      },
    ];
  }
}
