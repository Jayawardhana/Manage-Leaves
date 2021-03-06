import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(
     private router:Router,
     private authService:AuthService,
     private flashMessage:FlashMessagesService,
     public user:AuthService

  ) { }

  ngOnInit() {
 
  }


  logoutUser(){
     
     this.authService.logout();
     this.flashMessage.show("You're Logged out" , { cssClass: 'alert-success', times:3000});
     this.router.navigate(['']);
     return false;

  }

}
