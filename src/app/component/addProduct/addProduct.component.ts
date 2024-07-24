import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserService } from 'src/app/Services/apiser.service';
import { Icategory } from 'src/app/models/Icategory';
import { Iproduct } from 'src/app/models/Iproduct';
@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css'],
})
export class AddProductComponent implements OnInit {
  catListe: Icategory[] ;
  newPrd:Iproduct={} as Iproduct
binding: any;
  constructor(private apiser: ApiserService, private router: Router) {
    this.catListe = [
      { id:1, name: 'Laptop' },
      { id:2, name: 'Taplet' },
      { id:3, name: 'Phone' },
    ];

  }

  ngOnInit() {}

  addProduct() {
    // const prd: Iproduct = {
    //   id: 700,
    //   name: 'New Taplet',
    //   imgURL: 'https://fakeimg.pl/200x100/',
    //   quntatity: 10,
    //   categoryID: 2,
    //   price: 100,
    // };
    const observe = {
      next: (prd: Iproduct) => {
        alert('product add successfuly');
        this.router.navigateByUrl('/product');
      },

      error: (error: Error) => {
        console.log(error.message);
      },
    };
    this.apiser.addProduct(this.newPrd).subscribe(observe);
  }
}
