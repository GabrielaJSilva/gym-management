import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenusComponent implements OnInit{
  items: MenuItem[] = [];
  ngOnInit() {
    
    this.items = [

        {
            label: 'Início',          
        },
        {
            label: 'Professores',
            //command: (event) => this.abrirProfessores(),         
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
}
