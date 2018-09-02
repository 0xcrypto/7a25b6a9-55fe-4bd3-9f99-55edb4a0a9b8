import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../dist/assets/css/separate/pages/login.min.css']
})
export class LoginComponent implements OnInit {
  private router:Router;
  private assetService:AssetsService;

  constructor(private _router: Router, private _assetService:AssetsService) {
    this.router = _router;
    this.assetService = _assetService;
  }

  ngOnInit() {
    this.assetService.loadAssets('SCRIPTS', ['app'], 'app-login')
    .then(data => {}).catch(error => console.log(error));
  }

  gotoIndex(){
    this.router.navigateByUrl('/index');
  }
}
