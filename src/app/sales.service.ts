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
import { ArrAccepted } from './arr-accepted';
import { environment } from '../environments/environment';

@Injectable()
export class SalesService {

  baseUrl = environment.baseUrl;
  private salesurl= `${this.baseUrl}/sales`;
  private producturl= `${this.baseUrl}/product`;
  private proposalurl= `${this.baseUrl}/proposal`;

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

    approveOrder(orders: ArrAccepted): Observable<Sales> {
      const url = `${this.salesurl}/order/stat`;
      return this.http.post<Sales>(url, orders, this.auth.getHeader());
    }

    getProduct(): Observable<Product[]>{
      return this.http.get<Product[]>(this.producturl,this.auth.getHeader());
    }
    getProposal(id:number): Observable<Proposal>{
      const url = `${this.proposalurl}/${id}`;
      return this.http.get<Proposal>(url,this.auth.getHeader());
    }
    
    getOrderDetail(sales_id:number): Observable<Order[]>{
      const url = `${this.salesurl}/order/${sales_id}`;
      return this.http.get<Order[]>(url, this.auth.getHeader());
    }    

}
