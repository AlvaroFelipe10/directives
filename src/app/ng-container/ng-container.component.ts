import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "Alvaro", role: "admin", lastlogin: new Date('2/1/2023')},
    { login: "Ana", role: "user", lastlogin: new Date('3/1/2023')},
    { login: "Augusto", role: "admin", lastlogin: new Date('4/1/2023')},
    { login: "Medina", role: "user", lastlogin: new Date('5/1/2023')},

  ]

  constructor(){

  }

  ngOnInit(): void {

  }
}
