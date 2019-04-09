import { Component, OnInit } from '@angular/core';
import { Sales } from '../sales';
import { SalesService } from '../sales.service'

@Component({
  selector: 'app-listofapproval',
  templateUrl: './listofapproval.component.html',
  styleUrls: ['./listofapproval.component.css']
})
export class ListofapprovalComponent implements OnInit {
  
  sales: Sales[];

  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.getSales()
  }

  getSales(): void {
    this.salesService.getSales()
    .subscribe(sales => this.sales = sales);
  }

}
