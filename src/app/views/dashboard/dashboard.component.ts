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

  
  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    //private productService: ProductService,
    private router: Router,
    ) {}
  

  ngOnInit() {
    
      this.items = [

          {
              label: 'Início',          
          },
          {
              label: 'Professores',
              command: (event) => this.abrirProfessores(),         
          },
          {
              label: 'Planos',   
          },
          {
            label: 'Cadastrar Aluno',
            
          },
          {
            label: 'Financeiro',
            
          },
          {
              separator: true      
          },

      ];
  }
  abrirProfessores() {
    this.router.navigate(['login']);
    //console.log('funcionou')
  }
}


  