import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/shared/interfaces/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  public dsCustomer: Customer[] = [];
  public form: FormGroup;

  constructor(
    private customerSvc: CustomerService,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      salesmanId: '',
      customerName: '',
      pic: '',
      city: '',
      remark: '',
      npwp: '',
      customerPrice: '',
      address: '',
      address2: '',
      contact: '',
      regison: '',
      province: '',
      kuota: '', 
      prefExpedition: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    let data: Customer = this.form.value;
    console.log(data, 'data from submit');
    this.customerSvc.postCustomer(data)
      .subscribe((res: Customer[]) => {
        console.log(res, 'success');
      }, (err) => {
        console.log(err, 'error from customer register component');
      });
  }

}
