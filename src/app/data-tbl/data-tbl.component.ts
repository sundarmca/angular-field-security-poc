import { Component, OnInit } from '@angular/core';
import { ForminputService } from './../forminput.service';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {
  resultset = [];
  formTitle = 'JSON response loaded to Data Table';
  constructor(private dtable: ForminputService) { }

  ngOnInit() {
    this.dtable.getData()
      .subscribe((data: any) => {
        this.resultset = data.searchdata;
        console.log(this.resultset);
    })
  }

}