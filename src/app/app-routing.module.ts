import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarprodutoComponent } from './components/produtos/cadastrarproduto/cadastrarproduto.component';
import { ListarprodutosComponent } from './components/produtos/listarprodutos/listarprodutos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarprodutosComponent},
  {path:'produtos/cadastrar', component:CadastrarprodutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

