import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  public dsTabs: any = ['customer register', 'customer list', 'customer setting', 'customer register import'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
