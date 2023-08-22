import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './views/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TelaProfessoresComponent } from './views/tela-professores/tela-professores.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
//import { TelaAlunosComponent } from './views/tela-alunos/tela-alunos.component';
//import { MenuComponent } from './views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelaProfessoresComponent,
//   TelaAlunosComponent,
//    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    TableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
