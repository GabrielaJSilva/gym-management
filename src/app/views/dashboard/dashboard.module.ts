import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'src/app/views/menu/menu.module';
import { TelaAlunosModule } from 'src/app/views/tela-alunos/tela-alunos.module';

@NgModule({
  declarations: [ DashboardComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    DashboardRoutingModule,
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    MenuModule,
    TelaAlunosModule,
  ]
})
export class DashboardModule { }
