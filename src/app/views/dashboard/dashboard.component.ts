import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', 
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  alunos!: Alunos [];
  requestLogin: any;
  checked: boolean = false;
  selectedAluno!: Alunos;
  //binary: boolean = true;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private alunosService: AlunosService,
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
      this.alunosService.getAlunosMini().then((data: Alunos[]) => {
        this.alunos = data;
      });
  }
  abrirProfessores() {
    //this.router.navigate(['menu']);
    console.log('funcionou')
  }
  deslogar() {
    this.router.navigate(['login']);
  }
}


  