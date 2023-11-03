    import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-pagamento',
  templateUrl: './resultado-pagamento.component.html',
  styleUrls: ['./resultado-pagamento.component.css']
})

export class ResultadoPagamentoComponent implements OnInit {
  resultado: any

  constructor(public ativaRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.resultado = JSON.parse(this.ativaRouter.snapshot.paramMap.get("resoltado") as string)
    console.log(this.resultado)
  }











}
