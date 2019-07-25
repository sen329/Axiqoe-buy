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
  reports: any;

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit() {
    this.generateReport();
    this.getReport();
  }

  generateReport(): void{
    this.reportService.generateReport()
    .subscribe(report => this.reports = report);
  }

  getReport(): void{
    this.reportService.getReport()
    .subscribe(report => this.report = report);
  }

  downloadReport(): void{
    this.reportService.downloadReport();
  }

  headElements = ['ID', 'SalesName','Branch','CustomerName','CustomerAddress','CustomerContact','ProductCode',
                  'ProductName','ProductPrice','LKPP','ProposedPrice','Quantity','Margin','Total','Accepted','RecommendedPrice',
                  'Created_at','Updated_at'];
}
