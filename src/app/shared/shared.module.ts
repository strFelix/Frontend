import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardProdutoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  exports:[CardProdutoComponent]
})
export class SharedModule { }
