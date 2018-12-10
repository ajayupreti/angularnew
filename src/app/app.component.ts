import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'
import { UserService } from './service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListDetailComponent } from './shared/list-detail/list-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns = ['title', 'url', 'date', 'author']
  dataSource: any
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  data: any

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.showList()
    setInterval(() => {
      this.showList()
    }, 10000);
  }

  showList() {
    this.userService.showList().subscribe((response: any) => {
      this.data = response.hits
      this.dataSource = new MatTableDataSource(response.hits)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    }, (err: any) => {
      console.log(err)
    })
  }

  search(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toUpperCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate =
      (data: any, filter: string) => data.title ? data.title.toUpperCase().indexOf(filter) != -1 : false;
    this.dataSource.paginator = this.paginator;
  }

  showDetail(rowData: any) {
    const modalRef = this.modalService.open(ListDetailComponent)
    modalRef.componentInstance.dataPassed = rowData
    modalRef.result.then(() => {
    }).catch((err) => {
    })
  }
}
