import { CommunicateService } from './../communicate.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy {
  subscription: Subscription;
  products = [];
  constructor(
    private _communicateService: CommunicateService,
    private _router: Router,
  ) {
    this.subscription = _communicateService.observedProducts.subscribe(
      (updateProducts) => { this.products = updateProducts },
      (err) => { },
      () => { }
    )
  }
  edit(product) {
    let index = this.products.indexOf(product);
    this._router.navigate(['products/edit/', index]);
  }
  delete(product) {
    this.products.splice(this.products.indexOf(product), 1);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
