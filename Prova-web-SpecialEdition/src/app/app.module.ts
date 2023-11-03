import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ItemsComponent } from './items/items.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ResultadoPagamentoComponent } from './resultado-pagamento/resultado-pagamento.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DetalhesComponent,
    ItemsComponent,
    PagamentoComponent,
    ResultadoPagamentoComponent,
    NavbarComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
