import { Component } from '@angular/core';
import { Alunos } from 'src/app/resources/domain/alunos';
import { AlunosService } from 'src/app/resources/services/alunosservice';

@Component({
  selector: 'app-tela-alunos',
  templateUrl: './tela-alunos.component.html',
  styleUrls: ['./tela-alunos.component.scss']
})
export class TelaAlunosComponent {

  alunos!: Alunos [];
  selectedAluno!: Alunos;
  constructor(

    private alunosService: AlunosService,

    ) {}
  ngOnInit() {
    
    this.alunosService.getAlunosMini().then((data: Alunos[]) => {
      this.alunos = data;
    });
}
}

