import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  public dsCustomer: Customer[] = [];

  constructor(private customerSvc: CustomerService) { }

  ngOnInit(): void {
    this.customerSvc.getCustomers()
      .subscribe((res: Customer[]) => {
        this.dsCustomer = res;
      }, (err) => {
        console.log(err, 'error from visitor list component');
      });
  }

}
