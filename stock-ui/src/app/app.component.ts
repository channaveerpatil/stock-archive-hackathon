import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-root-john',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'World';
  searchJs: string;
  public datastics: string[];

  public name: any = "Channaveer Patil";

  public stockData: any;
  public stocSelectedkData: any;


  constructor(private http: Http) { }

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  schedulerJobList: any;

  selId: string = '';
  dtTrigger: Subject<any> = new Subject();
  message: string = '';

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0, "asc"]]
    };

    this.getStock("http://localhost:8080/getBestStocks").subscribe(
      (data) => {
        console.log('User Info', JSON.stringify(data));
        this.dtTrigger.next();
        this.stockData = data;
      },
      (err) => console.log("Error Loging In:", err),
      () => {
        console.log("All good");
      }
    );
  }

  getStock(url: string) {
    return this.http.get(url).map(res => res.json())
  }



  rowClick(symbol: any) {
    console.log(symbol);

    this.getStock("http://localhost:8080/getSelectedStocks?symbol=" + symbol).subscribe(
      (data) => {
        console.log('User Info', JSON.stringify(data));
        this.rerender();
        this.stocSelectedkData = data;
      },
      (err) => console.log("Error Loging In:", err),
      () => {
        console.log("All good");
      }
    );

  }


  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      console.log('dtInstance : ' + dtInstance)
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
