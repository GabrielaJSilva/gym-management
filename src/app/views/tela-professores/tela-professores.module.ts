import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TelaProfessoresComponent } from './tela-professores.component';


@NgModule({
  declarations: [TelaProfessoresComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [TelaProfessoresComponent]
})
export class TelaProfessoresModule { }
