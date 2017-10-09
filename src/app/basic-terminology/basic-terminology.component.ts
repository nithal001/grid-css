import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-basic-terminology',
  templateUrl: './basic-terminology.component.html',
  styleUrls: ['./basic-terminology.component.css']
})
export class BasicTerminologyComponent implements OnInit {
  data: any;
  filterData:any;
  value: string;
  title: string;
  subTitle: string;
  paragraphOne: string;
  imageGridLayout: string;
  paraTwo: string;
  paraThree: string;
  imageContainer: string;
  gridLine: string;
  gridLinePara: string;
  gridLineImage: string;
  gridTrack: string;
  gridTrackPara: string;
  gridTrackImage: string;
  gridCell: string;
  gridCellPara: string;
  gridCellImage: string;
  gridArea: string;
  gridAreaPara: string;
  gridAreaImage: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
      this.value = 'basic-terminology';
      this.getBasicData();
  }

  getBasicData() {
      this.commonService.getData()
        .subscribe(
            data => {
                this.data = data;
                this.filterData = this.data[this.value] ? this.data[this.value] : [];
                this.title = this.filterData.title;
                this.subTitle = this.filterData.sub_title;
                this.paragraphOne = this.filterData.paragraph_one;
                this.imageGridLayout = this.filterData.image_grid_layout;
                this.paraTwo = this.filterData.paragraph_two;
                this.paraThree = this.filterData.paragraph_three;
                this.imageContainer = this.filterData.image_container;
                this.gridLine = this.filterData.grid_line;
                this.gridLinePara = this.filterData.grid_line_paragraph;
                this.gridLineImage = this.filterData.grid_line_image;
                this.gridTrack = this.filterData.grid_track;
                this.gridTrackPara = this.filterData.grid_track_paragraph;
                this.gridTrackImage = this.filterData.grid_track_image;
                this.gridCell = this.filterData.grid_cell;
                this.gridCellPara = this.filterData.grid_cell_paragraph;
                this.gridCellImage = this.filterData.grid_cell_image;
                this.gridArea = this.filterData.grid_area;
                this.gridAreaPara = this.filterData.grid_area_paragraph;
                this.gridAreaImage = this.filterData.grid_area_image;
            }
        );
  }

}
