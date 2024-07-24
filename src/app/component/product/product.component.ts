import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';


import { CartViewModel } from 'src/app/ViewModels/cart-viewModel';
// import { StaticProuductService } from '../Services/StaticProuduct.service';
import { Router } from '@angular/router';
import { ApiserService } from 'src/app/Services/apiser.service';
import { Icategory } from 'src/app/models/Icategory';
import { Iproduct } from 'src/app/models/Iproduct';


// import { ApiProductService } from '../Services/ApiProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnChanges, OnInit {
  catList:Icategory[];
  prdCat:Iproduct[]=[];
  // prdList: Iproduct[];
  orderTotalPrice: number = 0;
  @Input() sendCatId: number = 0;
  @Output() totatalPriceChanged: EventEmitter<number>;
  @Output() itemBought: EventEmitter<CartViewModel>;

  constructor(
    //  private staticserv: StaticProuductService,
    private apiProduct : ApiserService,
    private roter: Router
  ) {
    this.totatalPriceChanged = new EventEmitter();
    this.itemBought = new EventEmitter<CartViewModel>();

    this.catList = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Taplet' },
      { id: 3, name: 'Phone' },
    ];
    // // this.prdList = [
    // //   {
    // //     id: 100,
    // //     name: 'Lenovo labtop',
    // //     price: 10000,
    // //     quntatity: 1,
    // //     imgURL: 'https://fakeimg.pl/200x100/',
    // //     categoryID: 1,
    // //   },
    // //   {
    // //     id: 200,
    // //     name: 'Dell labtop',
    // //     price: 506450,
    // //     quntatity: 2,
    // //     imgURL: 'https://fakeimg.pl/200x100/',
    // //     categoryID: 1,
    // //   },
    // //   {
    // //     id: 300,
    // //     name: 'samsung taplet',
    // //     price: 1374190,
    // //     quntatity: 3,
    // //     imgURL: 'https://fakeimg.pl/200x100/',
    // //     categoryID: 2,
    // //   },
    // //   {
    // //     id: 400,
    // //     name: 'vivo taplet',
    // //     price: 108452,
    // //     quntatity: 5,
    // //     imgURL: 'https://fakeimg.pl/200x100/',
    // //     categoryID: 2,
    // //   },
    // //   {
    // //     id: 500,
    // //     name: 'Iphone x',
    // //     price: 20500,
    // //     quntatity: 4,
    // //     imgURL: 'https://fakeimg.pl/200x100/ ',
    // //     categoryID: 3,
    // //   },
    // //   {
    // //     id: 600,
    // //     name: 'samsung Note 10',
    // //     price: 10000,
    // //     quntatity: 6,
    // //     imgURL: 'https://fakeimg.pl/200x100/',
    // //     categoryID: 3,
    // //   },
    // // ];
    // this.prdCat = this.prdList;
  }

  ngOnChanges() {
    //  this.filterProduct();
    //  this.prdCat = this.staticserv.getProductByCatId(this.sendCatId);
    this.apiProduct.getProductByCatID(this.sendCatId).subscribe((products) => {
      this.prdCat = products;
    });
  }
  ngOnInit(): void {
    //  this.prdCat = this.staticserv.getAllProuduct();
    this.apiProduct.getAllProduct().subscribe((products) => {
      this.prdCat = products;
    });
  }
  openPrdDetetais(prdID: number) {
    this.roter.navigate(['/product', prdID]);
  }

  Buy(prd: number, count: any) {
    // this.itemBought.emit(this.bought);

    this.orderTotalPrice += prd * +count;
    this.totatalPriceChanged.emit(this.orderTotalPrice);
  }

  // filterProduct() {
  //   if (this.sendCatId == 0) {
  //     this.prdCat = this.prdList;
  //   } else
  //     this.prdCat = this.prdList.filter(
  //       (prd) => prd.categoryID == this.sendCatId
  //     );
  // }
}
