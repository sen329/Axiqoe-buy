import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FileUploadService } from '../file-upload.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  add: any = {};
  product: Product;
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
    this.forms = this.formBuilder.group({
      file: ['']
    });
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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.forms.get('file').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.forms.get('file').value);

    this.fileUploadService.upload(formData).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    ),{responseType: 'file'}, alert("Data Uploaded"); console.error;
  }
  
      }//request csc utk subdomain, ip server? space server (server yg mana?)
