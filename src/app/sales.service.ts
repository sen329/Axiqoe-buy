import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { AuthService } from './auth.service';

import { Sales } from './sales';
import { error } from 'util';
import { Product } from './product';
import { Proposal } from './proposal';
import { Order } from './sales';

@Injectable()
export class SalesService {

  private salesurl= 'http://localhost:8000/api/sales';
  private producturl= 'http://localhost:8000/api/product';
  private proposalurl= 'http://localhost:8000/api/proposal';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }
    
    addSales(sales: Sales): Observable<Sales>{
        const url = `${this.salesurl}/create`;
        return this.http.post<Sales>(url, sales, this.auth.getHeader());
    }

    getSales(): Observable<Sales[]>{
      return this.http.get<Sales[]>(this.salesurl,this.auth.getHeader());
    }

    getSale(id: number): Observable<Sales> {
      const url = `${this.salesurl}/detail/${id}`;
      return this.http.get<Sales>(url,this.auth.getHeader());
    }

    approveSale(sales: Sales, id: number): Observable<Sales> {
      const url = `${this.salesurl}/${id}`;
      return this.http.post<Sales>(url, sales, this.auth.getHeader());
    }

    getProduct(): Observable<Product[]>{
      return this.http.get<Product[]>(this.producturl,this.auth.getHeader());
    }
    getProposal(id:number): Observable<Proposal>{
      const url = `${this.proposalurl}/${id}`;
      return this.http.get<Proposal>(url,this.auth.getHeader());
    }
    
    getOrderDetail(sales_id:number): Observable<Order>{
      const url = `${this.salesurl}/order/${sales_id}`;
      return this.http.get<Order>(url, this.auth.getHeader());
    }    

}
