import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-grid-support',
  templateUrl: './grid-support.component.html',
  styleUrls: ['./grid-support.component.css']
})
export class GridSupportComponent implements OnInit {
  data: any;
  value: string;
  filterData: any;
  imageUrl: string;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.value = 'about-grids';
  }

  getFullData() {
      this.commonService.getData()
        .subscribe(
            data => {
                this.data = data;
                this.filterData = this.data[this.value] ? this.data[this.value] : [];
                this.imageUrl = this.filterData.image_url;
            }
        );
  }

}
