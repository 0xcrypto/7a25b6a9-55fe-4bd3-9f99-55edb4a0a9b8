import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../assets.service';

@Component({
  selector: 'app-center-content-layout',
  templateUrl: './center-content-layout.component.html'
})
export class CenterContentLayoutComponent implements OnInit {
  private assetService:AssetsService;

  constructor(private _assetService:AssetsService) {
    this.assetService = _assetService;
  }

  ngOnInit() {
    this.assetService.loadAssets('SCRIPTS', ['jquery', 'jquery-ui', 'tether', 'bootstrap',
    'plugins', 'jquery-matchHeight', 'app'])
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));

    this.assetService.loadAssets('STYLES', ['bootstrap', 'font-awesome', 'main'])
    .then(data => {
        console.log('styles loaded ', data);
    }).catch(error => console.log(error));
  }
}
