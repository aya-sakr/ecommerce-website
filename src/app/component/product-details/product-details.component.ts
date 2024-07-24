import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';


import { Location } from '@angular/common';
import { Iproduct } from 'src/app/models/Iproduct';
import { StaticProuductService } from 'src/app/Services/StaticProuduct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currePrdId: number = 0;
  prd: Iproduct | null = null;
  prdIDsArry: Number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private prdservice: StaticProuductService ,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.currePrdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    this.prd = this.prdservice.getProuductId(this.currePrdId);
    this.prdIDsArry = this.prdservice.getPrdIDs();
  }
  goBack() {
    this.location.back();
  }
  previousPrd() {
    let currentIndex = this.prdIDsArry.findIndex(
      (ele) => ele == this.currePrdId)
      console.log(currentIndex)
    let perviousPrdID = this.prdIDsArry[currentIndex -1]
    console.log(perviousPrdID)
  }
  NextPrd() {}


}
