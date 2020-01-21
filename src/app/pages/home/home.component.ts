import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTag, SongSheet } from '../../services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(private homeServe: HomeService) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedSheetList();
  }

  private getBanners () {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private getHotTags () {
    this.homeServe.getHotTags().subscribe(tags => {
      this.hotTags = tags;
      // console.log('tags:', tags);
    });
  }

  private getPersonalizedSheetList () {
    this.homeServe.getPerosonalSheetList().subscribe(sheets => {
      this.songSheetList = sheets;
      // console.log('sheets:', sheets);
    });
  }

  ngOnInit () {
  }

  onBeforeChange ({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide (type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

}
