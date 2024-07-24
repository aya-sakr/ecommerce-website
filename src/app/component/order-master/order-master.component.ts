import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Icategory } from 'src/app/models/Icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent  implements AfterViewInit{
   ;

  catList: Icategory[];
  slectedCategoryId: number = 0;
  receivedTotalPrice: number = 0;
  @ViewChild('clientName') clientNameInp!:ElementRef
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Taplet' },
      { id: 3, name: 'Phone' },
    ];

  }




  totalPrice(totalOrder: number) {
    this.receivedTotalPrice = totalOrder;

  }
  ngAfterViewInit(): void {
    this.clientNameInp.nativeElement.value="Your Name Here"
    this.clientNameInp.nativeElement.style.border="1px solid red"

  }


}

