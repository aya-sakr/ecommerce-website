import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrmotionAdsService {
  private adList: string[];

  constructor() {
    this.adList = [
      'Big Discount',
      'Sale up to 50%',
      'Check our white friday offers',


      'Special white friday offer up to 70%',
      //  ' ',
    ];
  }

  getScheduleAds(intervalInsecond: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let adsTime = setInterval(() => {
        console.log("set interval")
        if (counter == this.adList.length) {
          observer.complete();
        }

        if (this.adList[counter] == ' ') {
          observer.error('Error:empty Ads');
        }

        observer.next(this.adList[counter]);
        counter++;
      }, intervalInsecond * 1000);
      return{
        unsubscribe() {
          clearInterval(adsTime)
          console.log("in obs unsubscrib")
        },
      }
    });

  }

  getserialAds():Observable<string>
  {
    // return of("a","b")
     return from(this.adList)


  }

}
