import { Router } from '@angular/router';
import { Person } from './../../../../_core/utils/interface';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

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
    this.router.navigate(["dashboard/detail-manager/" + id]);
  }

}
