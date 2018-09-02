import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private router:Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  gotoLogin(){
    this.router.navigateByUrl('/login');
  }

}
