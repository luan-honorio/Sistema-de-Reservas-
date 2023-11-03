import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GeralserviceService } from '../geralservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  value = 'Seocho-gu';
  date = '2022-11-25';
  items: any[] = [];

  constructor(public service: GeralserviceService, private router: Router) { }
  ngOnInit(): void {
    this.service.getFilterItem(this.value, this.date).subscribe(response => {
      this.items = response.map((res: any) => {
        res['Picture'] = res.ItemPictures.shift();
        res.ItemPrices = res.ItemPrices.find((d: any) => d.Date == this.date + 'T00:00:00')
        console.log(res)
        return res;
      
      })
    })
    }


  handleEvent(value: any) {
    this.value = value;
  }

  detalhes(item: any) {
    this.router.navigate(["/detalhes", { item: JSON.stringify(item), value: this.value }])
  }
}
