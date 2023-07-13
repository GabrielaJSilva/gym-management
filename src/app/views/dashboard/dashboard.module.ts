import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CardModule,
    TieredMenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    
  ]
})
export class DashboardModule { }
