import { Injectable, untracked } from '@angular/core';
import { Iproduct } from '../models/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProuductService {
  private prdList: Iproduct[];



  // cid: number;
  // prdIDs :number[]=[]
  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Lenovo labtop',
        price: 10000,
        quntatity: 1,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Dell labtop',
        price: 506450,
        quntatity: 2,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'samsung taplet',
        price: 1374190,
        quntatity: 3,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'vivo taplet',
        price: 108452,
        quntatity: 5,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 500,
        name: 'Iphone x',
        price: 20500,
        quntatity: 4,
        imgURL: 'https://fakeimg.pl/200x100/ ',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'samsung Note 10',
        price: 10000,
        quntatity: 6,
        imgURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
    ];
  }

  getAllProuduct(): Iproduct[] {
    return this.prdList;
  }
  getProductByCatId(cid: number): Iproduct[] {
    if (cid == 0) {
      return this.prdList;
    } else return this.prdList.filter((prd) => prd.categoryID == cid);
  }
  getProuductId(pid: number): Iproduct | null {
    let foundProuduct = this.prdList.find((prd) => prd.id == pid);
    return foundProuduct ? foundProuduct : null;
  }
  getPrdIDs(): number[]{
     let prdIDs:any[]=this.prdList.map(ele=>ele.id)
     return prdIDs
  }

}
