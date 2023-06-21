import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', 
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  requestLogin: any;
  loginService: any;
  router: any;
  alertService: any;

  

  ngOnInit() {
    
      this.items = [

          {
              label: 'Início',
              icon: 'pi pi-fw pi-pencil',          
          },
          {
              label: 'Professores',
              icon: 'pi pi-fw pi-user',         
          },
          {
              label: 'Planos',
              icon: 'pi pi-fw pi-calendar',   
          },
          {
            label: 'Cadastrar Aluno',
            icon: 'pi pi-fw pi-calendar',
            
          },
          {
            label: 'Financeiro',
            icon: 'pi pi-fw pi-calendar',
            
          },
          {
              separator: true
              
          },
          // {
          //     label: 'Admin',
          //     icon: 'pi pi-fw pi-power-off'
          // }
      ];
  }
  
}


  