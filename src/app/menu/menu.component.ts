import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  public listPath: any = [
    { name: 'Visitor list', path: 'visitor-list', icon: 'list_alt' },
    { name: 'Input visitor', path: 'input_visitor_details', icon: 'post_add' },
    { name: 'Request queue', path: 'request-queue-number', icon: 'add_to_queue' },
    { name: 'Test case', path: 'test-case', icon: 'quiz' }
  ];

  public newDate: string;
  public newTime: number | Date;
  public userName: string;
  public changeText: boolean;

  constructor(
    private router: Router,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
    this.getDate();
    this.getUser();
  }

  onSidenav() {
    this.sidenav.toggle();
  }

  onPath(event: string) {
    this.router.navigateByUrl('/' + event);
  }

  getDate() {
    const event: Date = new Date();
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const utc = 'id-ID'
    this.newDate = event.toLocaleDateString(utc, options);
    setInterval(() => {
      this.newTime = Date.now();
    }, 1000);
  }

  getUser() {
    let userId: string = '1';
    this.userSvc.getUser(userId)
      .subscribe((res: User) => {
        this.userName = `${res.role} -  ${res.name}`;
      }, (err) => {
        console.log(err, 'error from menu component');
      });
  }

}
