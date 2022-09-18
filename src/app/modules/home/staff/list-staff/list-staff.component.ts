import { Person } from './../../../../_core/utils/interface';

import { Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

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

  detail(id: string) {
    this.router.navigate(['dashboard/detail-staff/' + id]);
  }


}
