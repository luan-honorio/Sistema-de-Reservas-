import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GeralserviceService } from '../geralservice.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {

  form: any

  constructor(private service: GeralserviceService, public router: Router, private activitRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.form = JSON.parse(this.activitRouter.snapshot.paramMap.get('form') as string)
    }


   
  chamarToken() {

    try {


      this.service.requestAPITOKEN({
        "customer": "token",
        "orderId": "3",
        "price": this.form.price,
        "extraInfo": " ",
        "callBackUrl": "324"
      }).subscribe(token => {

        this.service.requestPagamento({
          "cardNo": "234234",
          "orderId": "2",
          "extraInfo": token,
          "status": "ok",
          "trackId": null,
          "price": 119.00,
          "callBackUrl": null,
          "verify": true
        }).subscribe(transacao => {

          this.service.requestGetInfo(token).subscribe(response => {

            var resoltados = {
              datainicio: this.form.checkIn,
              datatermino: this.form.checkOut,
              transaction: transacao,
              title: this.form.title,
              total: this.form.price,
              status: "sucesso"

            };



            this.router.navigate(['/resultado', { resoltado: JSON.stringify(resoltados) }])
          },
            error => {

              var resoltados = {
                status: "Erro",
                message: error,


              }
              this.router.navigate(['/resultado', { resoltado: JSON.stringify(resoltados) }])


            }
          )



        })


      }, er => {
        var resoltados = {
          status: "Erro",
          message: er,
        }

        this.router.navigate(['/resultado', { resoltado: JSON.stringify(resoltados) }])

      })
    } catch (err) {
    }
  }


}
