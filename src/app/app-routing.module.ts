import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraClienteComponent } from './components/cadastra-cliente/cadastra-cliente.component';
import { CadastraOsComponent } from './components/cadastra-os/cadastra-os.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { Error404Component } from './components/error404/error404.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaOsComponent } from './components/lista-os/lista-os.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "cadastraCliente", component: CadastraClienteComponent
  },
  {
    path: "listaClientes", component: ListaClientesComponent
  },
  {
    path: "cadastraOs", component: CadastraOsComponent
  },
  {
    path: "listaOs", component: ListaOsComponent
  },
  {
    path: "estoque", component: EstoqueComponent
  },
  {
    path: "configuracoes", component: ConfiguracoesComponent
  },
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },  
  {
    path: "**", component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
