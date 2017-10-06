import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-flex-grid',
  templateUrl: './flex-grid.component.html',
  styleUrls: ['./flex-grid.component.css']
})
export class FlexGridComponent implements OnInit {
  data: any;
  value: string;
  filterData: any;
  heading: string;
  lists: Array<boolean> = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.value = 'flex-grid';
      this.getCompareData();
  }

  getCompareData() {
      this.commonService.getData()
        .subscribe(
            data => {
                this.data = data;
                this.filterData = this.data[this.value] ? this.data[this.value]: [];
                this.heading = this.filterData.heading;
                this.lists = this.filterData.description;
            }
        );
  }

}
