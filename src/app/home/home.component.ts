import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }
goToform(){
  this.router.navigate(['form'])
}
goTotable(){
  this.router.navigate(['table'])
}
goTodirective(){
  this.router.navigate(['directive'])
}

}
