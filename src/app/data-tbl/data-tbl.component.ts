import { Component, OnInit } from '@angular/core';
import { ForminputService } from './../forminput.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {
  results = [];
  // lbel: string;
  // name: string;
  // team: string;
  // project: string;
  // inputval: string;
  // property: string;

  formTitle = 'JSON response loaded to Data Table';
  constructor(private dtable: ForminputService) { 
  }

  ngOnInit() {
    this.getDataItems();
  }

  fetchFromService(){
    return this.dtable.getData();
  }

  getDataItems(): void {
    this.fetchFromService()
    .subscribe((data: any): void => { 
        this.results = data.searchdata;
        //  console.info(data);
        // console.log(data['searchdata'][0]);
    });
  }

  onEditInit(event): void {
    console.log(this.results);
    console.log('Edit Init Event Called');
  }

  onEditCancel():void {
    console.log(this.results);
    console.log('Edit Cancel Event Called');
  }

  // checkAccess(attr: any) {
  //   if (attr === 'read' || attr === 'protected') {
  //     return true;
  //   }
  // }

  checkDisp(val: any, prop = null) {
    if (prop === 'protected') {
      return "*".repeat(val.length)
    } else {
      return val;
    }
  }
}