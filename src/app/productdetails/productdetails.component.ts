import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  add: any = {};
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    },
    err => console.log(err.error)
    );
  }

  updatePrice(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.updatePrice(this.add,id)
    .subscribe(res => {
      alert('Data updated');
      this.goBack();
  },
    err=>{
      let error = err.error;
      alert(error);
      console.error;
    });
  } 

  goBack(): void{
    this.location.back();
  }

}
