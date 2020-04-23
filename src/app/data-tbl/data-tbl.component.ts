import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tbl',
  templateUrl: './data-tbl.component.html',
  styleUrls: ['./data-tbl.component.css']
})
export class DataTblComponent implements OnInit {
  formTitle = 'JSON response loaded to Data Table';
  constructor() { }

  ngOnInit() {
  }

}