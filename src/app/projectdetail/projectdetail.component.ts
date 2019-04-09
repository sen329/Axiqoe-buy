import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Sales } from '../sales';
import { SalesService } from '../sales.service';
import { Accepted } from '../accepted';
import { ACCEPTED } from '../accepted-list';
import { Proposal } from '../proposal';



@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {
  add: any = {};
  sales: Sales;
  AcceptedList: Accepted[] = ACCEPTED;
  proposal: Proposal;
  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
    private location: Location
  ) { }
  
  ngOnInit() {
    this.getProposal();
  }

  getProposal(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.getProposal(id)
      .subscribe(proposal => {
        this.proposal = proposal;
      },
      err => console.log(err.error)
      );
  }

  approveSale(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.approveSale(this.add,id)
    .subscribe(res => {
      alert('Data recieved');
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