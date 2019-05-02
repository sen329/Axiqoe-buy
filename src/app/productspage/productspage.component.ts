import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FileUploadService } from '../file-upload.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {

  products: Product[];
  fileToUpload: File = null;
  forms: FormGroup;
  error: string;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private fileUploadService: FileUploadService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.forms = this.formBuilder.group({
      file: ['']
    });
  }

  getProducts(): void{
    this.productsService.getProducts()
    .subscribe(products => this.products = products)
  }

  headElements = ['ID', 'Product Code', 'Product Name', 'Price'];

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.forms.get('file').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.forms.get('file').value);

    this.fileUploadService.update(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    ),{responseType: 'file'}, alert("Data Uploaded"); console.error;
  }
}
