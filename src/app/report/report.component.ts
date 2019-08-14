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

  headElements = ['ID', 'SalesName','Branch','Nolang','Customer Name','Customer Address','Contact Person','Contact Number','Product Code',
                  'Product Name','Product Price','LKPP','Proposed Price','Quantity','Margin','Total','Accepted','Recommended Price','Status',
                  'Created at','Updated at'];
}
