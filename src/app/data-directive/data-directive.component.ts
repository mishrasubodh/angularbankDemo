import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-directive',
  templateUrl: './data-directive.component.html',
  styleUrls: ['./data-directive.component.scss']
})
export class DataDirectiveComponent implements OnInit {
  colors = [
    {
      colorName: "red",
      value: "#f00"
    },
    {
      colorName: "green",
      value: "#0f0"
    },
    {
      colorName: "blue",
      value: "#00f"
    },
    {
      colorName: "cyan",
      value: "#0ff"
    },
    {
      colorName: "magenta",
      value: "#f0f"
    },
    {
      colorName: "yellow",
      value: "#ff0"
    },
    {
      colorName: "black",
      value: "#000"
    }
  ]
  constructor(
    private router: Router
  ) {


  }

  ngOnInit(): void {
  }
  goback() {
    this.router.navigate(['home'])
  }
}
