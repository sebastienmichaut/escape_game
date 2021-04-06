import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  getPrice() {
    let price = 0;
    const d = new Date();
    const n = d.getDay();
    if (n>=1 && n <=5) {
      price = 200;
    }else{
      price = 160;
    }
    return price;
  }
}
