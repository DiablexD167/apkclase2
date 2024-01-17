import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  logout(){
    this.route.navigate(['/login'])
  }
}
