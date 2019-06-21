import { Component, OnInit } from '@angular/core';

import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report: Report[];

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.generateReport();
    this.getReport();
  }

  generateReport(): void{
    this.reportService.generateReport();
  }

  getReport(): void{
    this.reportService.getReport()
    .subscribe(report => this.report = report);
  }

  downloadReport(): void{
    this.reportService.downloadReport();
  }

  headElements = ['ID', 'SalesName','CustomerName','CustomerAddress','CustomerContact','name','ProductCode',
                  'ProductName','ProductPrice','ProposedPrice','Quantity','Margin','Total','Accepted','RecommendedPrice'];
}
