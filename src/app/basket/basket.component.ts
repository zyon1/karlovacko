import { Component, OnInit } from "@angular/core";
import { PriceListService } from "../price-list.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TicketsService } from "../tickets.service";

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
  disableTotal = false;
  disablePrice = false;
  basketForm: FormGroup;

  constructor(
    private priceListService: PriceListService,
    private fb: FormBuilder,
    private ticketService: TicketsService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.basketForm.valueChanges.subscribe(value => {
      this.ticketService.basket = {
        selectedItem: this.selectedItem,
        quantity: value.quantity
      };
    });
    this.prices$ = this.priceListService.prices$;
    this.prices$.subscribe(console.log);
    this.total = 0;
  }
  buildForm() {
    this.basketForm = this.fb.group({
      name: ["", Validators.required],
      quantity: ["", Validators.required]
    });
  }
  onSelect(item) {
    this.selectedItem = item;
    console.log(item);
    if (this.selectedItem.value.price > 0) {
      this.disablePrice = true;
    }
  }

  onKey(event) {
    this.inputValue = event.target.value;
    this.total = this.inputValue * this.selectedItem.value.price;
    console.log(this.inputValue, this.total, this.selectedItem.value.price);
  }
}
