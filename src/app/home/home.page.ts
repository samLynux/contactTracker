
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  closedMenu:boolean = false;

  constructor(
    private router: Router,
    private menu: MenuController
  ) {}

  ngOinit()
  {
    this.menu.open('end');
  }

  pressed() {
    this.closedMenu = !this.closedMenu;
    this.menu.enable(this.closedMenu, 'first');
    this.menu.open('first');
  }
  goTo(destination:string) {
    this.router.navigate(['/home/tabs/'+destination]);
    this.pressed();
  }
}
