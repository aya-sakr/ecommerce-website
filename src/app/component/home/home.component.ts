import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, map } from 'rxjs';
import { PrmotionAdsService } from 'src/app/Services/prmotionAds.service';
import { StoreData } from 'src/app/ViewModels/StoreData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  StoreInfo: StoreData;
  imageshown: boolean = true;
   private subscription!: Subscription;

  constructor(private promoAds : PrmotionAdsService) {
    this.StoreInfo = new StoreData(
      'ITI Store',
      'https://picsum.photos/350/200',
      ['cairo', 'Alex', 'giza', 'mansora']
    );
  }
  ngOnInit(): void {
    // let observer = {
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Ads Finish');
    //   },
    // };
    // this.subscription= this.promoAds.getScheduleAds(1).subscribe(observer);hy

    // let add= this.promoAds.getserialAds().subscribe()
    // this.add.push
    // this.subscription= this.promoAds.getserialAds().subscribe(ad=>{
    //   console.log(ad)
    // })
    let filteration =this.promoAds.getserialAds().pipe(
      filter(ad=>ad.includes("white friday")),
      map(ad=>("Ad:"+ad))


    )
     filteration.subscribe(
      ad=>{
           console.log(ad)}
    )




  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
    // for (let subscript of this.subscription) {
    //   subscript.unsubscribe();
    // }
    // this.subscription.unsubscribe()
  }
  toggle() {
    this.imageshown = !this.imageshown;
  }
}
