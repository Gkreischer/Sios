import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastraClienteComponent } from './components/cadastra-cliente/cadastra-cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { CadastraOsComponent } from './components/cadastra-os/cadastra-os.component';
import { ListaOsComponent } from './components/lista-os/lista-os.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { LoginComponent } from './components/login/login.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    NavbarComponent,
    CadastraClienteComponent,
    ListaClientesComponent,
    EstoqueComponent,
    CadastraOsComponent,
    ListaOsComponent,
    ConfiguracoesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
