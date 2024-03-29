import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    userInfoReceived: UserModel | undefined;
    idUserHtmlRouterLink: any;
  
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
      // Si quiero obtener un valor por URL usando routerLink
      this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
      // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
      console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
     }
  
    ngOnInit() {
    }
  }

