import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about-grids',
  templateUrl: './about-grids.component.html',
  styleUrls: ['./about-grids.component.css']
})
export class AboutGridsComponent implements OnInit {
    data: any;
    filterData: any;
    value: string;
    title: string;
    subTitle: string;
    imageUrl: string;
    description: Array<boolean> = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.value = 'about-grids';
      this.getFullData();
  }

  getFullData() {
      this.commonService.getData()
        .subscribe(
            data => {
                this.data = data;
                this.filterData = this.data[this.value] ? this.data[this.value] : [];
                this.title = this.filterData.heading;
                this.description = this.filterData.description;
                this.subTitle = this.filterData.sub_title;
                this.imageUrl = this.filterData.image_url;
            }
        );
  }
}
