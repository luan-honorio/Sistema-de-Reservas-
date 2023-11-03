import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  item: any;
  value!: string;
  form!: FormGroup;
  diarias!: number;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.item = JSON.parse(this.activeRoute.snapshot.paramMap.get('item') as string);
    console.log(this.item)

    this.value = this.activeRoute.snapshot.paramMap.get('value') as string;
    this.form = new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      reserve: new FormControl(null, [Validators.required, Validators.max(this.item.Capacity)]),
      price: new FormControl(),
      title: new FormControl(this.item.Title),
    });
    
    this.form.valueChanges.subscribe(res => {
      if (res.checkIn && res.checkOut) {
        const hours = ' 00:00:00'
        let date1 = new Date(res.checkIn + hours);
        let date2 = new Date(res.checkOut + hours);
        this.diarias = date2.getDate() - date1.getDate();
      }
    })


  }
  payment() {
    this.form.get('price')?.setValue(this.item.ItemPrices.Price * this.diarias);
    this.router.navigate(['/pagamento', {
      form: JSON.stringify(this.form.value),
    }]);
  }



}
