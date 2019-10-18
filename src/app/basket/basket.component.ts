import { Component, OnInit } from "@angular/core";
import { PriceListService } from "../price-list.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit {
  prices$;
  selectedItem;
  amountItem;
  total: number;
  inputValue;

  constructor(private priceListService: PriceListService) {}

  ngOnInit() {
    this.prices$ = this.priceListService.prices$;
    this.prices$.subscribe(console.log);
    this.total = 0;
  }
  onSelect(item) {
    this.selectedItem = item;
    console.log(item);
  }

  onKey(event) {
    this.inputValue = event.target.value;
    this.total = this.inputValue * this.selectedItem.value.price;
    console.log(this.inputValue, this.total, this.selectedItem.value.price);
  }
}
