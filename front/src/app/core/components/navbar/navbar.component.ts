import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterEnum } from '../../enums/router.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routerEnum: typeof RouterEnum;
  public currentRoute: string;

  constructor(private route: Router) {
    this.currentRoute = this.route.url ?? '/';
    this.routerEnum = RouterEnum;
  }

  ngOnInit(): void {
    this.route.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentRoute = route.url;
      }
    })
  }

  public activeRoute(route: string): string {
    return this.currentRoute === route ? 'active' : 'inactive';
  }

  public isRoute(route: string): boolean {
    return this.currentRoute === route;
  }

}
