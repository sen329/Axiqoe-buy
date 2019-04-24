import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  add: any = {};
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productsService.addProduct(this.add)
    .subscribe(res=>{
      alert("Successfully added");
      this.goBack();
    }, err=>console.log(err.error));
  }

  goBack(): void{
    this.location.back();
  }

}
