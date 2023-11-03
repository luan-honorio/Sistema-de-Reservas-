import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ItemsComponent } from './items/items.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ResultadoPagamentoComponent } from './resultado-pagamento/resultado-pagamento.component';


const routes: Routes = [
  {
    path: 'item',
    component: ItemsComponent
  },

  {
    path: 'detalhes',
    component: DetalhesComponent
  },
  {
    path: 'pagamento',
    component: PagamentoComponent

  },
  {
    path: 'resultado',
    component: ResultadoPagamentoComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'item'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
