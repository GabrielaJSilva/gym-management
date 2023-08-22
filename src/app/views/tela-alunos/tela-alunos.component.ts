import { Component } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-tela-alunos',
  templateUrl: './tela-alunos.component.html',
  styleUrls: ['./tela-alunos.component.scss']
})
export class TelaAlunosComponent {
  //alunos!: any[];
  alunos!: Alunos [];
  //requestLogin: any;
  //checked: boolean = false;
  selectedAluno!: Alunos;
  constructor(
    //private loginService: LoginService,
    //private alertService: AlertService,
    private alunosService: AlunosService,
    //private router: Router,
    ) {}
  ngOnInit() {
    
  
    this.alunosService.getAlunosMini().then((data: Alunos[]) => {
      this.alunos = data;
    });
}
}

