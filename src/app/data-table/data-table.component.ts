import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShowDatamodalComponent } from '../show-datamodal/show-datamodal.component'
import { Router } from '@angular/router';
interface PeriodicElement {
  address: string
  bank_id: Number
  bank_name: string
  branch: string
  city: string
  district: string
  ifsc: string
  state: string
}

@Component({
  selector: 'app-data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  ELEMENT_DATA = []
  branchdata = []
  globalFilter = '';

  citys = [
    { value: 'DELHI' },
    { value: 'MUMBAI' },
    { value: 'GURGAON' },
    { value: 'PUNE' }
  ];

  selectedCity = this.citys[0].value;
  selectedbranch
  selecteaddress
  showData = false
  displayedColumns: string[] = ['bank_name', 'city', 'district', 'state', 'open'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;




  constructor(
    public http: HttpService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.getbackendData(this.selectedCity)
  }
  ngOnInit() {

  }

  goback() {
    this.router.navigate(['home'])
  }
  openModal(modaldata) {
    console.log('modaldata :>> ', modaldata);
    const dialogRef = this.dialog.open(ShowDatamodalComponent, {
      data: {
        modaldata
      }
    })




  }
  getSelectValue(value) {

    this.getbackendData(value)
  }
  getBranchValue(filterValue) {
    console.log('data :>> ', filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAddressvalue(filteraddValue) {
    console.log('object :>> ', filteraddValue);
    filteraddValue = filteraddValue.trim(); // Remove whitespace
    filteraddValue = filteraddValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filteraddValue;
  }
  getbackendData(cityNmae) {
    this.http.getData(cityNmae).subscribe((data: any) => {
      this.showData = false
      if (data.length > 0) {
        this.ELEMENT_DATA = data
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        //this.branchdata =this.dataSource;
        this.dataSource.paginator = this.paginator;

        this.showData = true
      }

    })
  }

}


