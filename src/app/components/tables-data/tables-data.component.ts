import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Person } from 'src/app/_core/utils/interface';

@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.css']
})
export class TablesDataComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  detail() {
    this.router.navigate(['dashboard/manager']);
  }

}
