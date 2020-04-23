import { Component, OnInit } from '@angular/core';
import { ForminputService } from './../forminput.service';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {
  results = [];
  formTitle = 'JSON response loaded to Data Table';
  constructor(private dtable: ForminputService) { }

  ngOnInit() {
    this.dtable.getData()
      .subscribe((data: any) => {
        this.results = data.searchdata;
        console.log(this.results);
    })
  }

  checkAccess(attr: any) {
    if (attr === 'read' || attr === 'protected') {
      return true;
    }
  }

  checkDisp(val: any, prop = null) {
    if (prop === 'protected') {
      return "*".repeat(val.length)
    } else {
      return val;
    }
  }
}