import { Injectable } from "@angular/core";
import { FormArray, FormGroup, Validators, FormControl } from "@angular/forms";

@Injectable()
export class ItemlistService {
  
  itemListArray: FormArray;

  constructor() {}

  getListItemArray() {
    this.itemListArray = new FormArray([this.getNewItemRow()]);
    return this.itemListArray;
  }

  handleAddItem() {
    console.log("Add : Service Item called");
   
    this.itemListArray.push(this.getNewItemRow());

    console.log("Add Item ended");
  }

  getNewItemRow() {
    return new FormGroup({
      itemName: new FormControl("item name", Validators.required),
      quantity: new FormControl("5", Validators.required),
      description: new FormControl("desc")
    });
  }

  // handleDelteItem() {
  //   console.log("delete item called " + this.cartItems.length);
  //   if (this.cartItems.length > 1) {
  //     this.cartItems.removeAt(2); //this.cartItems.length-1);
  //   }
  // }

  handleDelteItem(i) {
    console.log("delete item called " + i);
    this.itemListArray.removeAt(i); //this.cartItems.length-1);
  }
}
