import { Component, OnInit, ViewChild } from '@angular/core'
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'
import { ActivatedRoute } from '@angular/router';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['company', 'name', 'email', 'sales-rep']
  dataSource: any
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  listTitles: any
  role: string
  id: string
  data: any

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this.showList()
  }

  showList(){
    this.userService.showList().subscribe((response: any) => {
      this.isLoading = false
      this.data = response.data[0].results
      this.dataSource = new MatTableDataSource(response.data[0].results)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
  })
  }

  search(filterValue) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toUpperCase();
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate =
      (data: any, filter: string) => data.name ? data.name.toUpperCase().indexOf(filter) != -1 : false;
    this.dataSource.paginator = this.paginator;
  }
}
