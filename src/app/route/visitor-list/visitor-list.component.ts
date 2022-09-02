import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VisitorService } from 'src/app/shared/services/visitor.service';
import { Visitor } from '../../shared/interfaces/visitor';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public pageSizeCount: number[] = [10, 25, 100];
  public displayedColumns: string[] = ["order", "productId", "name", "desc", "price"];
  public dsVisitors: MatTableDataSource<Visitor>;

  constructor(private visitorSvc: VisitorService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.visitorSvc.getVisitors()
      .subscribe((res: Visitor[]) => {
        this.dsVisitors = new MatTableDataSource(res);
        this.dsVisitors.paginator = this.paginator;
        this.dsVisitors.sort = this.sort;
        console.log(res, 'success');
      }, (err) => {
        console.log(err, 'error from visitor list component');
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsVisitors.filter = filterValue.trim().toLowerCase();
  }

  onAdd() {

  }

}
