import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'เสื้อ', name: 'รีด', weight: 50, symbol: 'ป้าใจดี',status: "เสร็จแล้ว"},
  {position: 'กางเกง', name: 'รีด', weight: 45, symbol: 'ป้าใจร้าย',status: "เสร็จแล้ว"},
  {position: 'กางเกง', name: 'รีด', weight: 67, symbol: 'ป้าใจร้าย',status: "เสร็จแล้ว"},

];


@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','status'];
  dataSource = ELEMENT_DATA;


  data:any={}
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(prams=>{
          this.data = prams
          console.log(prams)
        })

  }

}
