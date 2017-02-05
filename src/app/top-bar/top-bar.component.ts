import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
 
}

   myFunction = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "ul-topnav-link-list") {
        x.className += " responsive";
    } else {
        x.className = "ul-topnav-link-list";
    }
}
  }

