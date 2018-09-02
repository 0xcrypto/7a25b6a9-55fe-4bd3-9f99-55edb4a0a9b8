import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../assets.service';

@Component({
  selector: 'app-column-content-layout',
  templateUrl: './column-content-layout.component.html'
})
export class ColumnContentLayoutComponent implements OnInit {
  private assetService:AssetsService;

  constructor(private _assetService:AssetsService) {
    this.assetService = _assetService;
  }

  ngOnInit() {
    this.assetService.loadAssets('SCRIPTS', ['jquery', 'jquery-ui', 'tether', 'bootstrap'])
    .then(data => {
        console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }
}
