import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  name = 'Joe';
  roomNumber = 2;

  nbPersons: number = 3;
  initialPrice: number = 160;
  totalPrice = this.initialPrice;

  constructor(
    public priceService: PriceService
  ) {}

  ngOnInit(): void {
    this.initialPrice = this.priceService.getPrice();
    this.totalPrice = this.initialPrice;
  }

  calculatePrice() {
    return Math.floor(this.totalPrice / this.nbPersons);
  }

  checkReduc(str: string) {
    if (str === 'REDUC') {
      this.totalPrice = this.initialPrice * 0.7;
    } else {
      this.totalPrice = this.initialPrice;
    }
  }
  validate() {
    console.log(this.roomNumber);
  }
}
